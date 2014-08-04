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
1. Create a partial folder `src/component-name/partials/`
2. Create a new .hbs file `src/component-name/partials/partial-name`
3. Update `templates: ['main', 'partials/partial-name']` in `src/component-name/main.js`
4. In any `.hbs` file, add `{{> component-name/partials/partial-name}}`