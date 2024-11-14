# frozen_string_literal: true

module ::AppEventsDocsGenerator
  class Engine < ::Rails::Engine
    engine_name PLUGIN_NAME
    isolate_namespace AppEventsDocsGenerator
    config.autoload_paths << File.join(config.root, "lib")
  end
end
