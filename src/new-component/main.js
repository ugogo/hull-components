Hull.component({
  templates: ['main'],
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
  }
});