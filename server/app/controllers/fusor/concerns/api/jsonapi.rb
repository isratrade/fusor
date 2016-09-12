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
  module Concerns
    module Api::Jsonapi
      extend ActiveSupport::Concern

      included do
        resource_description do
          resource_id 'fusor'
          api_version 'v21'
          api_base_url '/fusor/api'
          app_info N_("Fusor v21 API version is based on JSONAPI.org spec. You need to use v21 by either passing 'version=21' in the Accept Header or using /fusor/api/v21/ in the URL.")
        end
      end

      def api_version
        '21'
      end

    end
  end
end
