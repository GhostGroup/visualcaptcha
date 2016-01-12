require 'rails'
require 'visualcaptcha'

module GGVisualCaptcha
  class Engine < ::Rails::Engine
    config.after_initialize do
      ActionView::Base.send(:include, GGVisualCaptcha::ViewHelper)
    end
  end
end