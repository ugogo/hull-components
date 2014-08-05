# Build Hull components

## Folder structure
```
├─ src/
│   ├─ index.html
│   ├─ component-name/
│   │   ├─ partials/
│   │   │   ├─ partial-name.hbs
│   │   ├─ main.js
│   │   ├─ main.hbs
├─ config.yml
├─ gruntfile.js
├─ package.json
├─ README.md
```

## Include a file
1 - Create a partial folder: `src/component-name/partials/`

2 - Create a new partial file: `src/component-name/partials/partial-name.hbs`

3 - Update `templates: ['main', 'partials/partial-name']` in `src/component-name/main.js`

4 - In any `.hbs` file, add `{{> component-name/partials/partial-name}}`


## Passing data-params
1 - In `.html` file, update with
```html
<div data-hull-component="new-component" data-hull-foo="bar" data-hull-bar="foo"></div>
```
2 - Retrieve options in `main.js`
```javascript
console.info('options:', this.options);
console.info('data-hull-foo:', this.options.foo);
console.info('data-hull-bar:', this.options.bar);
```

## Datasources
Datasources are (easier) ajax call to the Hull API.

Example if you want to get the current user's friends

1 - In `src/component-name/main.js` update datasources object to
```javascript
datasources: {
  mycustomvar: "/me/friends"
}
```
2 - You can access to this in the `beforeRender` and `afterRender` function
```javascript
beforeRender: function(data){
  console.warn('initialize called');
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
}
```
3 - It can also work with a quiz and his leaderboard
```javascript
datasources: {
  quiz: ":id?fields=badge",
  leaders: ":id/leaderboards/best-score?wrapped=true"
}
```

## Sandbox methods
Sandbox offers methods to access data, make calls, emit events and subscribe to them.

[Sandbox documentation](http://hull.io/docs/components/reference#the-sandbox)

Example, check if the current user is admin
```javascript
if(isLogged === null){
  console.warn('Please login');
  return;
}
console.warn('Is user admin?', this.sandbox.isAdmin());
```

## Handlebars useful markup
* Check if currentUser is logged in
```
{{#if loggedIn}}
  hey i'm loggin
{{else}}
  i'm not loggin
{{/if}}
```

* Check if currentUser is admin
```
{{#if isAdmin}}
  hey i'm admin
{{else}}
  i'm not admin
{{/if}}
```
