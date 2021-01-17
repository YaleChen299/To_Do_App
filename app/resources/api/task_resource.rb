class Api::TaskResource < JSONAPI::Resource
    attributes :title, :detail#, :deadline #, :steps, :tags
  end