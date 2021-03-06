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
    module Deployment
      module PrepareOrg
        class Prepare < Actions::Fusor::FusorBaseAction
          def humanized_name
            _("Prepare Org for Deployment")
          end

          def plan(deployment)
            super(deployment)
            fail _("Unable to locate fusor.yaml settings in config/settings.plugins.d") unless SETTINGS[:fusor]
            fail _("Unable to locate puppet module settings in config/settings.plugins.d/fusor.yaml") unless SETTINGS[:fusor][:puppet_module]

            sequence do
              unless ::Katello::Product.find_by_name('Fusor')
                plan_action(::Actions::Fusor::Deployment::PrepareOrg::CreateProduct, deployment)
              end

              unless ::Katello::Repository.find_by_name('Puppet')
                plan_action(::Actions::Fusor::Deployment::PrepareOrg::CreateRepository, 'Puppet', 'puppet', 'Puppet1', nil, nil)
              end

              SETTINGS[:fusor][:docker_repos].each do |repo|
                unless ::Katello::Repository.find_by_name(repo[:name])
                  plan_action(::Actions::Fusor::Deployment::PrepareOrg::CreateRepository, repo[:name], 'docker', repo[:name], 'http://registry-1.docker.io/', repo[:upstream_name])
                end
              end

              plan_action(::Actions::Fusor::Deployment::PrepareOrg::UploadModule)

              unless ::Katello::ContentView.find_by_name('Fusor Puppet Content')
                plan_action(::Actions::Fusor::Deployment::PrepareOrg::CreateContentView, deployment)
              end

              cv = ::Katello::ContentView.find_by_name('Fusor Puppet Content')
              puppet_module_name   = SETTINGS[:fusor][:puppet_module][:ovirt][:name]
              puppet_module_author = SETTINGS[:fusor][:puppet_module][:ovirt][:author]
              unless cv && ::Katello::ContentViewPuppetModule.where(name: puppet_module_name, author: puppet_module_author, content_view_id: cv.id)
                plan_action(::Actions::Fusor::Deployment::PrepareOrg::CreateContentViewPuppetModule)
              end

              unless cv && ::Katello::ContentView.find_by_name('Fusor Puppet Content').next_version > 1
                plan_action(::Actions::Fusor::Deployment::PrepareOrg::PublishContentView)
              end
            end
          end
        end
      end
    end
  end
end
