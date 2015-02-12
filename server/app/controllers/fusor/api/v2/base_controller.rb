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

require 'strong_parameters'

module Fusor
  module Api
    module V2
      class BaseController < ::Katello::Api::V2::ApiController

        include Api::V2::Rendering

        resource_description do
          api_version 'v2'
          api_base_url '/fusor/api'
        end

      end
    end
  end
end
