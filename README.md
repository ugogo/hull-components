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
