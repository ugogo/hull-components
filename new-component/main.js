this.Hull = this.Hull || {};
this.Hull.templates = this.Hull.templates || {};
this.Hull.templates._default = this.Hull.templates._default || {};
Hull.templates._default["new-component/main"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<h1>Hey oh, I'm in main.hbs</h1>\n<div data-hull-component=\"login/button@hull\"></div>\n";
  stack1 = self.invokePartial(partials['new-component/partials/footer'], 'new-component/partials/footer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  };
Hull.templates._default["new-component/partials/footer"]=function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>Ooh, I'm a footer.hbs</p>";
  } ; 

Hull.component({
  templates: ['main', 'partials/footer'],
  datasources: {
    mycustomvar: "/me/friends"
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
    var isLogged = Hull.currentUser();
    if(isLogged === null){
      console.warn('Please login');
      return;
    }
    var userFriends = data.mycustomvar;
    if(userFriends !== undefined)
      console.info('So you have friend(s) on this app...', userFriends);
    else
      console.info('Sorry but you are friendless');
    console.warn('Is user admin?', this.sandbox.isAdmin());
  },
  afterRender: function(){
    console.warn('afterRender');

    // retrieve data-hull-params
    console.info('options:', this.options);
    console.info('data-hull-foo:', this.options.foo);
    console.info('data-hull-bar:', this.options.bar);
  }
});