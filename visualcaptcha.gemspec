# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'visualcaptcha/version'

Gem::Specification.new do |gem|
  gem.name          = "visualcaptcha"
  gem.version       = GGVisualCaptcha::VERSION
  gem.authors       = ["GhostGroup"]
  gem.description   = %q{Visual Captcha}
  gem.summary       = %q{Visual Captcha}
  gem.homepage      = "https://github.com/GhostGroup/visualcaptcha"
  gem.files         = Dir["{lib,vendor}/**/*"] + ["LICENSE.txt", "README.md"]
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths = ["lib"]
  gem.add_dependency "railties"
end
