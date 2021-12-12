/**
 * Automates Snipcart fetching all current products on every push to main
 * via GitHub Actions, independent from the Netlify build process.
 *
 * This overkill/non-efficient approach ensures Snipcart always has the
 * latest data for all current products.
 *
 * Ideally this only runs when a push includes a change to one ore more
 * current product json files, and then only those files are fetched. This
 * would require using GH REST API within GH Actions - see the
 * [GH Actions docs on push event](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#push), which then points
 * to [REST API docs on getting commit info](https://docs.github.com/en/rest/reference/repos#get-a-commit).
 */
const fs = require('fs');
const path = require('path');

const productFetch = require('./productFetch.js');

const productsDir = path.join(__dirname, '../src/_data/products');
const productFiles = fs.readdirSync(productsDir);

const productsCurrent = productFiles.reduce((acc, file) => {
  const productData = JSON.parse(
    fs.readFileSync(path.join(productsDir, file), { encoding: 'utf-8' })
  );
  if (productData.currentListing) acc.push(productData);

  return acc;
}, []);

productsCurrent.forEach((product) => {
  const url = `https://www.azellaz.com/${product.slug}/`;
  productFetch(url)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});
