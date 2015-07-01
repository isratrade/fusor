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

require 'egon'

module Fusor
  module Api
    module Openstack
      class DeploymentPlansController < Api::Openstack::BaseController

        def deploy
          @plan = undercloud_handle.deploy_plan(params[:id])
          redirect_to :action => 'show', :id => params[:id]
        end
        
        def show
          render :json => {:deployment_plan => undercloud_handle.get_plan(params[:id])}
        end

        def update_role_count
          @plan = undercloud_handle.edit_plan_deployment_role_count(params[:id], params[:role_name], params[:count])
          redirect_to :action => 'show', :id => params[:id]
        end

        def update_role_flavor
          @plan = undercloud_handle.edit_plan_deployment_role_flavor(params[:id], params[:role_name], params[:flavor_name])
          redirect_to :action => 'show', :id => params[:id]
        end
        
      end
    end
  end
end
