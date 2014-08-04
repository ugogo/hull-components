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