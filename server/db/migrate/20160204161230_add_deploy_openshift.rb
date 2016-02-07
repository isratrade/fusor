class AddDeployOpenshift < ActiveRecord::Migration
  def change

    add_column :fusor_deployments, :deploy_openshift, :boolean, :default => false
    add_column :fusor_deployments, :openshift_install_loc, :string
    add_column :fusor_deployments, :openshift_storage_type, :string
    add_column :fusor_deployments, :openshift_storage_name, :string
    add_column :fusor_deployments, :openshift_storage_desc, :string
    add_column :fusor_deployments, :openshift_export_path, :string
    add_column :fusor_deployments, :openshift_username, :string

  end
end
