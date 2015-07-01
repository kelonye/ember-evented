/**
 * Module dependencies.
 */
require('ember');


Em.Application.initializer({
  name: 'io',
  initialize: function(container, app) {
    container.register('io:main', Em.Object.extend(Em.Evented));
    container.lookup('io:main');
  }
});

Em.Application.initializer({
  name: 'injectIo',
  initialize: function(container, app) {
    container.typeInjection('view', 'io', 'io:main');
    container.typeInjection('component', 'io', 'io:main');
    container.typeInjection('controller', 'io', 'io:main');
    container.typeInjection('route', 'io', 'io:main');
  }
});
