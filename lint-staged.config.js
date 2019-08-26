module.exports = {
  '*.js': [
    'npm run lint:eslint',
    'npm run lint:prettier',
    'git add',
    'npm run test:unit:file',
  ],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'npm run lint:prettier --parser json',
    'git add',
  ],
  'package.json': ['npm run lint:prettier', 'git add'],
  '*.vue': [
    'npm run lint:eslint',
    'npm run lint:stylelint',
    'npm run lint:prettier',
    'git add',
    'npm run test:unit:file',
  ],
  '*.scss': ['npm run lint:stylelint', 'npm run lint:prettier', 'git add'],
};
