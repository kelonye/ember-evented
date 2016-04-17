component = ./node_modules/.bin/component
folder = example/components/kelonye-ember-evented/

public: node_modules components $(shell find lib -type f)
	@mkdir -p $(folder)
	@cp -rf components/* example/components
	@cp -f component.json $(folder)
	@cp -rf lib $(folder)
	node build.js
	@touch $@

node_modules:
	@npm install

components:
	@$(component) install

example: public
	@xdg-open example/index.html

.PHONY: example
