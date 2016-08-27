module Fusor
  module Api
    module Version3
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
