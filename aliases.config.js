const path = require('path');

const aliases = {
  '@': '.',
  '@src': 'src',
  '@router': 'src/router',
  '@views': 'src/views',
  '@layouts': 'src/layouts',
  '@components': 'src/components',
  '@assets': 'src/assets',
  '@utils': 'src/utils',
  '@store': 'src/store',
  '@mixins': 'src/mixins',
  '@design': 'src/design/index.scss',
};

const aliasGroups = {
  webpack: {},
  jest: {},
};

for (const alias in aliases) {
  const aliasTo = aliases[alias];
  const aliasHasExtension = /\.\w+$/.test(aliasTo);

  aliasGroups.webpack[alias] = path.resolve(__dirname, aliasTo);
  aliasGroups.jest[`^${alias}$`] = aliasHasExtension
    ? `<rootDir>/${aliasTo}`
    : `<rootDir>/${aliasTo}/index.js`;
  aliasGroups.jest[`^${alias}/(.*)$`] = `<rootDir>/${aliasTo}/$1`;
}

module.exports = aliasGroups;
