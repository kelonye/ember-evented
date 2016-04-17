/**
 * Module dependencies.
 */
require('ember');


Em.Application.initializer({
  name: 'io',
  initialize: function(app) {
    app.register('io:main', Em.Object.extend(Em.Evented));
    app.inject('view', 'io', 'io:main');
    app.inject('component', 'io', 'io:main');
    app.inject('controller', 'io', 'io:main');
    app.inject('route', 'io', 'io:main');
  }
});
