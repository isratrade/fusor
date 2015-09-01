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
      class ImagesController < Api::Openstack::BaseController
        
        def index
          render :json => undercloud_handle.list_images.as_json
        end

        def show_by_name
          render :json => {:image => undercloud_handle.find_image_by_name(params[:name]).as_json}
        end
        
      end
    end
  end
end
