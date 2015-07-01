Tiny global events service. Emit and listen to global events from controllers, views, components and routes.

Install
---

    $ component install kelonye/ember-drawer

Example
---

    $ make example

Usage
---

An example of a digital clock component actuated from the controller.

```js

  require('ember-evented');
  
  App = Em.Application.create();
 
  App.DigitalClockComponent = Em.Component.extend({

    setup: function(){
      var self = this;
      self.get('io').on('tick', function(){
        var now = new Date;
        var time = [now.getHours(), now.getMinutes(), now.getSeconds()].join(':');
        self.set('time', time);
      });
    }.on('didInsertElement'),

  });

  App.IndexRoute = Em.Route.extend({

    setupController: function(c, m){
      
      this._super(c, m);

      var io = this.get('io');
      setInterval(function(){
        io.trigger('tick');
      }, 1000);

      io.trigger('tick');

    },

  });

```

```html

  <script type='text/x-handlebars' id='index'>
    {{digital-clock}}
  </script>
  <script type='text/x-handlebars' id='components/digital-clock'>
    {{time}}
  </script>

```
License
---