# Codest vue.js starter pack

- [Codest vue.js starter pack](#codest-vuejs-starter-pack)
  - [Status badges](#status-badges)
  - [About project](#about-project)
    - [Project features](#project-features)
    - [Planned features (TODO)](#planned-features-todo)
    - [Stack](#stack)
  - [Environments](#environments)
    - [Env variables](#env-variables)
      - [VUE_APP_TEST](#vue_app_test)
        - [Values](#values)
      - [NODE_ENV](#node_env)
        - [Values](#values)
  - [Transform starter pack to a real project](#transform-starter-pack-to-a-real-project)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Installation process](#installation-process)
  - [Development](#development)
    - [Project structure](#project-structure)
      - [Assets directory](#assets-directory)
      - [Components directory](#components-directory)
      - [Design directory](#design-directory)
      - [Layouts directory](#layouts-directory)
      - [Mixins directory](#mixins-directory)
      - [Router directory](#router-directory)
      - [Store directory](#store-directory)
      - [Utils directory](#utils-directory)
      - [Views directory](#views-directory)
  - [Testing](#testing)
  - [Deployment](#deployment)
    - [Prerequisites](#prerequisites)
    - [Deployment to the development environment](#deployment-to-the-development-environment)
    - [Deployment to the production environment](#deployment-to-the-production-environment)
  - [Scripts](#scripts)
    - [NPM Scripts](#npm-scripts)
      - [dev](#dev)
      - [dev:e2e](#deve2e)
      - [build](#build)
      - [build:ci](#buildci)
      - [lint](#lint)
      - [lint:eslint](#linteslint)
      - [lint:all:eslint](#lintalleslint)
      - [lint:stylelint](#lintstylelint)
      - [lint:all:stylelint](#lintallstylelint)
      - [lint:prettier](#lintprettier)
      - [lint:all:prettier](#lintallprettier)
      - [test:unit](#testunit)
      - [test:unit:file](#testunitfile)
      - [test:unit:watch](#testunitwatch)
      - [test:unit:ci](#testunitci)
      - [test:e2e](#teste2e)
      - [test](#test)
      - [test:ci](#testci)
    - [Make Scripts](#make-scripts)
  - [Changelog](#changelog)
  - [API](#api)
  - [Team](#team)

## Status badges
@FIXME

## About project
This project is a starter pack for vue.js, vuex, and vue-router based single-page applications.

It's based on Vue CLI 3 and bunch of plugins for optimization and general quality insurances.

You can find more about this starter pack on:
https://docs.google.com/document/d/1gaFzAWHl3knnPJCkLt9Cvpy3RbfB3v-YMZHOlzsSIkA/edit?usp=sharing

### Project features
Starter pack gives you a lot of features out of the box.
- The general-purpose project structure is broken into layouts, views, and components
- Store setup with cached and not cached HTTP client instances.
- Router setup with loading indicator based on nprogress plugin and views lazyloading.
- Linters configuration based on eslint, prettier, stylelint. 
- Unit test environment based on Jest and vue/test-utils.
- End to end test environment based on cypress.
- Git commit hooks based on lint-staged package running linting and testing
- Simple application example featuring some oh the functionalities. 

### Planned features (TODO)
The project never ends it might only grow
- Max out test coverage
- Add CircleCi support
- Max out e2e tests
- Comment each aspect of the example app 

### Stack
- vue.js - Frontend framework
- vuex - State management
- vue-router - Routing
- vue-meta - Meta data management
- axios - HTTP Client
- Jest - Unit testing env
- Cypress - E2E testing env

@FIXME - expand a bit

## Environments

### Env variables
#### VUE_APP_TEST
Change setup VUE for test purposes
Default value `none`

##### Values
`none` 
- Will setup project regularly

`e2e`
- Attach vue instance to the window object for easier testing
- If running inside Cypress ensure tests fail when Vue emits an error

#### NODE_ENV
Change build properties
Default value: `development`

##### Values
`development`
- Setup webpack development bundle
- Setup debug linters rules

`production`
- Setup webpack production bundle
- Setup production linters rules

@FIXME

## Transform starter pack to a real project
- Configure CircleCi or other CI
- Remove example code
- Remove obvious/too verbose comments
- Remove not related documentation parts (like this section)
- Update Team section of this document (it's important!)
- Program stuff? ... or just install a bunch of packages from npm. Dunno, whatever suits you ¯\_(ツ)_/¯
- This repository is full of obvious and redundant stuff so cleanup before developing!

## Installation
### Prerequisites
- `nodejs` latest version
- `npm` latest version

### Installation process
1. Install dependencies:
`npm i`

## Development
To run a development script with file watcher and dev-server run `npm start` command.

### Project structure
Most part of the project code is in `/src` directory which has `@src` alias in imports

#### Assets directory
It has an alias for imports `@assets`.  
This directory contains mostly static mostly binary parts of an application

#### Components directory
It has an alias for imports `@components`.
This directory contains the most code of your application.
In here you can find all components of an application that are not views (pages) nor layouts.
  
Components directory contain only directories.
Each directory in `Components` contain everything that is related to a single component -
in most cases it'll be component itself (index.vue) and unit test for it (*.unit.js).
Since importing directory in javascript imports index files from since Component entry
the file is named `index.vue` for importing convenience: 
```javascript
import Component from '@components/Component'
```
#### Design directory
It has an alias for imports `@design` - it points to index.scss file since this import you'll use the most.
This directory contains a design configuration that is not renderable after transpilation to CSS - things
like variables, mixins, and functions. There are no global styles in this directory - those are placed in App.vue component
since this one will be rendered always and only once. It's also a bad idea to write renderable things in design because those will be
duplicated in most components that are using variables from design.

In most cases in component you'll need an access to SCSS variables, mixins or functions, so you'll have to 
include them to components:
```vue
<style lang="scss" module>
@import '~@design';
...
</style>
``` 

#### Layouts directory
It has an alias for imports `@layouts`.
This directory contains layouts for your pages - general description that is used on multiple views (pages).

Similarly to components directory - it contains directories that contain everything linked to single layout,
in most cases layout itself (index.vue) and unit tests for it (*.unit.js).

Since the layout is a wrapper for other components it has to contain at least one `<slot />`,
that in most cases will contain view.

#### Mixins directory
It has an alias for imports `@mixins`.
This directory contains vue.js mixins.

Similarly to components directory - it contains directories that contain everything linked to the single mixin,
in most cases mixin definition itself (index.js) and unit tests for it (*.unit.js).

#### Router directory
It has an alias for imports `@routed`.
This directory contains the configuration of vue-router and routes definitions.

index.js contain configuration for vue-router, probably not much from here should be changes in the real-life project (although it should be understood!). When you'll need to add page transitions or some kind of in-between
loading view when the view is not rendered in a while - here is a great place to define it.

routes.js contain routes definitions.

#### Store directory
It has an alias for imports `@store`.
This directory contains state management configuration and modules definition.

Each module consists of actions, getters, mutations and state.
In this case actions returns factory that takes HTTP Client instance for HTTP calls.

Modules instantiation get place in `@store/modules/index` in here HTTP Client is injected, and modules tree build.

#### Utils directory
It has an alias for imports `@utils`
this directory contains utility scripts used across the project.

It contains directories that contain everything linked to single util,
in most cases util definition itself (index.js) and unit tests for it (*.unit.js).

#### Views directory
It has an alias for imports `@views`.
This directory contains views of pages.

It contains directories that contain everything linked to a single view (page),
in most cases page itself (index.vue) and unit tests for it (*.unit.js).

## Testing
1. Run the testing script:
`npm test`

## Deployment
### Prerequisites
CircleCi or other CI should be configured

### Deployment to the development environment
1. Push your changes to feature branch `git push origin feature/xxx`
1. Create a pull request
1. Wait for your changes to be approved
1. Push your changes to the development branch
1. ...
1. Profit

### Deployment to the production environment
1. Just ... go with git-flow ¯\\\_(ツ)_/¯
1. ...
1. Profit

@FIXME

## Scripts

### NPM Scripts
#### dev
Run local development instance of the project.  
`vue-cli-service serve`

#### dev:e2e
RUn end to end test on on development instance of the project.  
`cross-env VUE_APP_TEST=e2e vue-cli-service test:e2e --mode=development`

#### build
Build the project for production publish.  
`vue-cli-service build --modern`

#### build:ci
Build the project for production publish with report.html file with analysis of bundle content.  
`vue-cli-service build --modern --report`

#### lint
Run all linting scripts on the whole project.  
`run-s lint:all:*`

#### lint:eslint
Run eslint and fix all possible errors on given files.  
Used on pre-commit script.  
`eslint --fix`

#### lint:all:eslint
Run eslint and fix all possible errors on the whole project.
`eslint --fix --ext .js,.vue .`

#### lint:stylelint
Run stylelint and fix all possible errors on given files.  
Used on pre-commit script.  
`stylelint --fix`

#### lint:all:stylelint
Run stylelint and fix all possible errors on the whole project.
`stylelint --fix "src/**/*.{vue,scss}"`

#### lint:prettier
Run prettier on given files.
Used on pre-commit script.    
`prettier --write --loglevel warn`

#### lint:all:prettier
Run prettier on the whole project.
`prettier --write --loglevel warn "**/*.{js,json,css,scss,vue,html}"`

#### test:unit
Run all unit tests.  
`cross-env VUE_APP_TEST=unit vue-cli-service test:unit`

#### test:unit:file
Run unit tests for given files.
Used on precommit script.    
`cross-env VUE_APP_TEST=unit vue-cli-service test:unit --bail --findRelatedTests`

#### test:unit:watch
Run all unit test on watch mode.  
`cross-env VUE_APP_TEST=unit vue-cli-service test:unit --watch --notify --notifyMode --passWithNoTests change`

#### test:unit:ci
Run all unit test for CI with coverage and ci option for JEST.
`cross-env VUE_APP_TEST=unit vue-cli-service test:unit --coverage --ci`

#### test:e2e
Run all end to end tests.  
`cross-env VUE_APP_TEST=e2e vue-cli-service test:e2e --headless`

#### test
Run all tests.  
`run-s test:unit test:e2e`

#### test:ci
Run all tests for CI.  
`run-s test:unit:ci test:e2e`

### Make Scripts
@FIXME

## Changelog
@FIXME

## API
@FIXME

## Team
- Mateusz Staniuk <mateusz.staniuk@codesthq.com>
