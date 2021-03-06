Hull.component({
  templates: ['main', 'partials/footer'],
  datasources: {
    currentUserFriends: "/me/friends"
  },
  options: {
  },
  actions: {
    log: function(evt, action){
      console.info('clicked');
      console.info(action.data);
      console.info('data passed (foo):', action.data.foo)
      console.info('data passed (bar):', action.data.bar)
    }
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
    var userFriends = data.currentUserFriends;
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