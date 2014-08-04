Hull.component({
  templates: ['main', 'partials/footer'],
  datasources: {
  },
  options: {
  },
  actions: {
  },

  initialize: function(){
    console.warn('initialize called');
  },
  beforeRender: function(data){
    console.warn('beforeRender');
  },
  afterRender: function(){
    console.warn('afterRender');

    // retrieve data-hull-params
    console.info('options:', this.options);
    console.info('data-hull-foo:', this.options.foo);
    console.info('data-hull-bar:', this.options.bar);
  }
});