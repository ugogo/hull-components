Hull.component({
  templates: ['main', 'partials/quiz-content'],
  datasources: {
    quiz: ":id?fields=badge",
  },
  options: {
  },
  actions: {
    startQuiz: function(){
      this.render('partials/quiz-content');
    }
  },
  helpers: {
    loginProviders: function(){
      var providers = this.options.providers;
      return providers;
    }
  },

  initialize: function(){
  },
  beforeRender: function(){
  },
  afterRender: function(){
    var self = this;
    Hull.on('hull.auth.login', function(){
      self.render('main');
    });
    Hull.on('hull.auth.logout', function(){
      self.render('main');
    });
  }
});