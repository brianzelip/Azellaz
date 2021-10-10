/**
 * 11ty JS template as PostCSS pipeline
 */
const fs = require('fs/promises');
const path = require('path');
const postcss = require('postcss');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const pluginsOrder = [
  postcssCustomProperties(),
  postcssImport(),
  autoprefixer(),
  cssnano()
];

const fileName = 'az.css';

module.exports = class {
  async data() {
    const sourcePath = path.join(__dirname, fileName);

    return {
      permalink: `css/${fileName}`,
      eleventyExcludeFromCollections: true,
      sourceCss: await fs.readFile(sourcePath),
      sourcePath
    };
  }

  render({ sourceCss, sourcePath }) {
    return postcss(pluginsOrder)
      .process(sourceCss, { from: sourcePath })
      .then((result) => result.css);
  }
};
