require('ember-evented');

Em.TEMPLATES['components/digital-clock'] = Em.HTMLBars.template(require('./templates/component-digital-clock'));
Em.TEMPLATES['index'] = Em.HTMLBars.template(require('./templates/application-index'));

App = Em.Application.create();

App.DigitalClockComponent = Em.Component.extend({

  setup: function(){
    var self = this;
    self.get('io').on('tick', function(){
      var now = new Date;
      var time = [now.getHours(), now.getMinutes(), now.getSeconds()].map(pad.bind(null, 2)).join(':');
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

function pad(size, num) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}