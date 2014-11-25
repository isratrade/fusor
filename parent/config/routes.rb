Rails.application.routes.draw do

  namespace :fusor do
    namespace :api do
      scope '(:apiv)',
            :module      => :v2,
            :defaults    => { :apiv => 'v2' },
            :apiv        => /v1|v2/,
            :constraints => ApiConstraints.new(:version => 2) do

        resources :deployments, :except => [:new, :edit]

      end
    end
  end

end
