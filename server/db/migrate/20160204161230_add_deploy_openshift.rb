class AddDeployOpenshift < ActiveRecord::Migration
  def change

    add_column :fusor_deployments, :deploy_openshift, :boolean, :default => false
    add_column :fusor_deployments, :openshift_install_loc, :string
    add_column :fusor_deployments, :openshift_number_nodes, :integer, :default => 0
    add_column :fusor_deployments, :openshift_storage_size, :string
    add_column :fusor_deployments, :openshift_username, :string

  end
end
