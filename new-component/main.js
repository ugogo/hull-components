this.Hull = this.Hull || {};
this.Hull.templates = this.Hull.templates || {};
this.Hull.templates._default = this.Hull.templates._default || {};
Hull.templates._default["new-component/main"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Hey oh, I'm in main.hbs</h1>";
  } ; 

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