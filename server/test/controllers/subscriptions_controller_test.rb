require 'test_plugin_helper'

module Fusor
  class Api::Jsonapi::SubscriptionsControllerTest < ActionController::TestCase
    include ActionDispatch::TestProcess

    def setup
      @subscription = fusor_subscriptions(:imported)
      # magic, without this some of the routes don't resolve for some reason
      setup_fusor_routes
      @controller = ::Fusor::Api::V21::SubscriptionsController.new
    end

    test "index request should return array of subscriptions" do
      response = JSON.parse(get(:index).body)
      assert_response :success
      sources = response['subscriptions'].map { |sub| sub['source'] }
      assert sources.include?(@subscription.source), "Response was not correct, did not include the imported subscription"
    end

    test "index request should filter by deployment and source" do
      deployment = fusor_deployments(:rhev_and_cfme)
      response = JSON.parse(get(:index, :deployment_id => deployment.id, :source => "imported").body)
      assert_response :success
      assert response['subscriptions'].all? { |sub| sub['source'] == 'imported' && sub['deployment_id'] == deployment.id }, "Response contains non-imported items"
    end

    test "index request should filter by deployment" do
      deployment = fusor_deployments(:rhev_and_cfme)
      response = JSON.parse(get(:index, :deployment_id => deployment.id).body)
      assert_response :success
      assert response['subscriptions'].all? { |sub| sub['deployment_id'] == deployment.id }, "Response contains items from a different deployment"
    end

    test "index request should filter by source" do
      response = JSON.parse(get(:index, :source => "added").body)
      assert_response :success
      assert response['subscriptions'].all? { |sub| sub['source'] == "added" }, "Response contains non-added items"
    end

    test "show request should return the subscription" do
      response = JSON.parse(get(:show, :id => @subscription.id).body)
      assert_response :success
      assert_equal @subscription.source, response['subscription']['source'], "Response was not correct, subscription was not returned"
    end

    test "update request should successfully update subscription source" do
      new_source = "added"
      response = JSON.parse(put(:update, :id => @subscription.id, subscription: {source: new_source}).body)
      assert_response :success
      assert_equal new_source, response['subscription']['source'], "Response was not correct, source was not updated"
      assert_not_nil Subscription.find_by_source(new_source), "The subscription was not really updated in the database"
    end

    test "update should return error message if save fails" do
      new_source = "invalid"
      response = JSON.parse(put(:update, :id => @subscription.id, subscription: {source: new_source}).body)
      assert_response(422)
      assert_equal "is not included in the list", response['errors']['source'][0], "Response message was incorrect"
    end

    test "create request should successfully create subscription" do
      new_source = "added"
      response = nil # set scope
      assert_difference('Subscription.count', +1, 'The number of subscriptions should increase by one if we create a new one') do
        response = JSON.parse(post(:create, {subscription: {
                                              deployment_id: 3,
                                              contract_number: '16700200',
                                              product_name: 'Awesome OS',
                                              quantity_attached: 2,
                                              source: "added"}}).body)
      end
      assert_response :success
      assert_equal new_source, response['subscription']['source'], "Response was not correct, did not return subscription"
      assert_not_nil Subscription.find_by_source new_source
    end

    test "create should return error message if save fails" do
      response = JSON.parse(post(:create, {subscription: {
                                            deployment_id: 3,
                                            contract_number: '16700200',
                                            product_name: 'Awesome OS',
                                            quantity_attached: 2,
                                            source: "invalid"}}).body)
      assert_response(422)
      assert_equal "is not included in the list", response['errors']['source'][0], "Response message was incorrect"

    end

    test "upload" do

      manifest_file = {}
      # put the manifest into the same deployment mapped to the other
      manifest_file[:deployment_id] = @subscription.deployment.id
      manifest_file[:name] = 'fake_manifest.zip'
      manifest_file[:file] = fixture_file_upload('fake_manifest.zip', 'application/zip', :binary)
      # pretty hackish but it mimics what the emberjs ui sends us
      params = {}
      params[:manifest_file] = manifest_file

      response = JSON.parse(put(:upload, params).body)

      assert_response :success
      deployment = fusor_deployments(:rhev_and_cfme)
      assert_equal deployment.manifest_file, response['manifest_file']
    end

    test "destroy request should remove a subscription" do
      assert_difference('Subscription.count', -1, 'The number of subscriptions should decrease by one if we delete one') do
        delete(:destroy, :id => @subscription.id)
      end
      assert_response :success
    end

    test "validate should return false if no deployment is passed in" do
      response = JSON.parse(get(:validate).body)
      # validate returns 200 and a boolean
      assert_response :success
      assert_equal false, response['valid'], "validate returned true with no deployment id"
    end

    test "validate returns not found if deployment does not exist" do
      # pass in deployment 100 which doesn't exist
      JSON.parse(get(:validate, :deployment_id => '100').body)
      assert_response :not_found
    end

    test "subsequent validate fails not enough subscriptions for products" do
      deployment = fusor_deployments(:sub_val_subsequent_rhev_cfme)
      # pass in deployment 100 which doesn't exist
      response = JSON.parse(get(:validate, :deployment_id => deployment.id).body)
      assert_response :success
      assert_equal false, response['valid'], "passed with not enough subscriptions"
    end

    test "subsequent validate passes" do
      deployment = fusor_deployments(:sub_val_subsequent_rhev)
      # pass in deployment 100 which doesn't exist
      response = JSON.parse(get(:validate, :deployment_id => deployment.id).body)
      assert_response :success
      assert_equal true, response['valid'], "validate failed when we had subs"
    end

    test "disconnected validate passes" do
      # remove uploaded subscriptions
      ::Katello::Subscription.destroy_all
      deployment = fusor_deployments(:sub_val_disconnected_rhev)
      # pass in deployment 100 which doesn't exist
      response = JSON.parse(get(:validate, :deployment_id => deployment.id).body)
      assert_response :success
      assert_equal true, response['valid'], "validate failed when we had subs"
    end

    test "connected with no credentials should return false" do
      # remove uploaded subscriptions
      ::Katello::Subscription.destroy_all
      deployment = fusor_deployments(:sub_val_connected_rhev)
      response = JSON.parse(get(:validate, :deployment_id => deployment.id).body)
      assert_response :bad_request
      assert_equal "Customer portal credentials are required.  Please provide them using login.", response["displayMessage"]
    end
  end
end
