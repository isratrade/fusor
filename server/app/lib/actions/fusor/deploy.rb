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

module Actions
  module Fusor
    class Deploy < Actions::EntryAction
      def humanized_name
        _("Deploy")
      end

      def plan(deployment)
        fail _("Unable to locate fusor.yaml settings in config/settings.plugins.d") unless SETTINGS[:fusor]
        fail _("Unable to locate content settings in config/settings.plugins.d/fusor.yaml") unless SETTINGS[:fusor][:content]
        fail _("Unable to locate host group settings in config/settings.plugins.d/fusor.yaml") unless SETTINGS[:fusor][:host_groups]

        sequence do
          # TODO: add an action to support importing a manifest created as part of the deployment

          products_enabled = [deployment.deploy_rhev, deployment.deploy_cfme, deployment.deploy_openstack]

          content = SETTINGS[:fusor][:content]
          products_content = [content[:rhev], content[:cloudforms], content[:openstack]]
          host_groups = SETTINGS[:fusor][:host_groups]
          products_host_groups = [host_groups[:rhev], host_groups[:cloudforms], host_groups[:openstack]]

          products_enabled.each_with_index do |product_enabled, index|
            if product_enabled && products_content[index] && products_host_groups[index]
              plan_action(::Actions::Fusor::Content::EnableRepositories,
                          deployment.organization,
                          products_content[index])

              # As part of enabling repositories, zero or more repos will be created.  Let's
              # retrieve the repos needed for the deployment and use them in actions that follow
              repositories = retrieve_deployment_repositories(deployment.organization, products_content[index])

              plan_action(::Actions::Fusor::Content::SyncRepositories, repositories)

              # TODO: need to update to support multiple deployments per organization... to support this, we could
              # incorporate the deployment name in to the content view, activation key and host groups
              plan_action(::Actions::Fusor::Content::PublishContentView,
                          deployment.organization,
                          deployment.lifecycle_environment,
                          repositories)

              plan_configure_activation_key(deployment)

              plan_action(::Actions::Fusor::ConfigureHostGroups,
                          deployment.organization,
                          deployment.lifecycle_environment,
                          products_host_groups[index])
            end
          end
        end
      end

      private

      def plan_configure_activation_key(deployment)
        # At this time, 1 activation key can be used to support all products; therefore,
        # we only need to plan the action once.
        return if @configure_activation_key_planned
        plan_action(::Actions::Fusor::ActivationKey::ConfigureActivationKey,
                    deployment.organization,
                    deployment.lifecycle_environment)
        @configure_activation_key_planned = true
      end

      def retrieve_deployment_repositories(organization, product_content)
        repos = []
        product_content.each { |details| repos << find_repository(organization, details) }
        repos
      end

      def find_repository(organization, repo_details)
        product = ::Katello::Product.where(:organization_id => organization.id,
                                           :name => repo_details[:product_name]).first

        if product
          product_content = product.productContent.find do |content|
            content.content.name == repo_details[:repository_set_name]
          end

          substitutions = { basearch: repo_details[:basearch], releasever: repo_details[:releasever] }
          unless repository = repository_mapper(product, product_content.content, substitutions).find_repository
            fail _("Unable to locate repository for: Product '%{product_name}',"\
                   " Repository Set '%{repo_set_name}'") %
                   { :product_name => product.name, :repo_set_name => product_content.content.name }
          end
        else
          fail _("Product '%{product_name}' does not exist. Confirm that a manifest"\
                 " containing it has been imported.") % { :product_name => repo_details[:product_name] }
        end
        repository
      end

      def repository_mapper(product, content, substitutions)
        ::Katello::Candlepin::Content::RepositoryMapper.new(product, content, substitutions)
      end
    end
  end
end
