const pfolioImgName = require('./src/utils/filters/portfolioImageName.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/admin');
  eleventyConfig.addPassthroughCopy({ 'src/crawlers/*.txt': '/' });

  eleventyConfig.addFilter('pfolioImgName', pfolioImgName);

  eleventyConfig.addWatchTarget('./src/css/');

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false
  });

  return {
    templateFormats: ['md', 'html', '11ty.js', 'njk'],
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
};
