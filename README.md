# Vuelendar Landing Page

## Status badges
@FIXME

## About project
Landing page for vuelendar vue.js component.
See vuelendar at: https://github.com/codesthq/vuelendar

### Stack
Based on Codest frontend starter kit for vue.js
See starter pack: https://github.com/codesthq/frontend-starter-vue

## Installation
### Prerequisites
- `nodejs` latest version
- `npm` latest version

### Installation process
1. Install dependencies:
`npm i`

## Development
To run a development script with file watcher and dev-server run `npm start` command.

## Testing
1. Run the testing script:
`npm test`

## Deployment
Build static project 
`npm run build`

@TODO: Add info how to deploy to gh-pages

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

## Team
- Mateusz Staniuk <mateusz.staniuk@codesthq.com>
