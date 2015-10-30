#
# Copyright 2015 Red Hat, Inc.
#
# This software is licensed to you under the GNU General Public
# License as published by the Free Software Foundation; either version
# 2 of the License (GPLv2) or (at your option) any later version.
# There is NO WARRANTY for this software, express or implied,
# including the implied warranties of MERCHANTABILITY,
# NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
# have received a copy of GPLv2 along with this software; if not, see
# http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.

module Fusor
  class Api::V21::SubscriptionsController < Api::V2::BaseController
    skip_before_filter :check_content_type, :only => [:upload]

    before_filter :check_content_type, :only => :upload

    def check_content_type
      # overwrite this method in V2::BaseController that
      # renders error if request.content_type != "application/json"
      # the upload method uses "multipart/form-data"
    end

    def upload
      # placeholder only. TODO perform actually upload file
      render :json => {params: params, request: @request}
    end

    def index
      @subscriptions = Subscription.all
      render :json => @subscriptions, :each_serializer => Fusor::SubscriptionSerializer
    end

    def create
      @subscription = Fusor::Subscription.new(params[:subscription])
      if @subscription.save
        render :json => @subscription, :serializer => Fusor::SubscriptionSerializer
      else
        render json: {errors: @subscription.errors}, status: 422
      end
    end

    def show
      @subscription = Fusor::Subscription.find(params[:id])
      render :json => @subscription, :serializer => Fusor::SubscriptionSerializer
    end

    def update
      @subscription = Fusor::Subscription.find(params[:id])
      if @subscription.update_attributes(params[:subscription])
        render :json => @subscription, :serializer => Fusor::SubscriptionSerializer
      else
        render json: {errors: @subscription.errors}, status: 422
      end
    end

    def destroy
      @subscription = Fusor::Subscription.find(params[:id])
      @subscription.destroy
      render json: {}, status: 204
    end

    def upload
      fail HttpErrors::BadRequest, _("No manifest file uploaded") if params[:content].blank?
      fail HttpErrors::BadRequest, _("No deployment specified") if params[:deployment_id].blank?

      deployment = Deployment.find(params[:deployment_id])

      begin
        # candlepin requires that the file has a zip file extension
        temp_file = File.new(File.join("#{Rails.root}/tmp", "import_#{SecureRandom.hex(10)}.zip"), 'wb+', 0600)
        temp_file.write params[:content].read
        deployment.update_attribute("manifest_file", temp_file.path)
      ensure
        temp_file.close
      end

      render json: {}, status: 200
    end

  end
end
