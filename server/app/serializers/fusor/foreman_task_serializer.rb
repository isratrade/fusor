module Fusor
  class ForemanTaskSerializer < ActiveModel::Serializer

    type :foreman_tasks

    attributes :id

  end
end
