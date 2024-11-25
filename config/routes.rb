# frozen_string_literal: true

AppEventsDocsGenerator::Engine.routes.draw do
  get "/examples" => "examples#index"
  # define routes here
end

Discourse::Application.routes.draw do
  mount ::AppEventsDocsGenerator::Engine, at: "app-events-docs-generator"
end
