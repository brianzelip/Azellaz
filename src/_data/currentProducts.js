/**
 * This is an 11ty global data file.
 *
 * It exports an array of current products to 11ty, including product
 * quantity data fetched from Snipcart, for paginating the product.md
 * template into all current product pages.
 *
 * Ideally the pagination would happen directly from the product json files
 * and avoid the extra step of this file. But because not every product json
 * file is a current product, "current products" is a computed value based
 * on data in each file, and 11ty can't yet paginate computed data (see
 * https://github.com/11ty/eleventy/issues/1110).
 *
 */
const process = require('process');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

/**
 * @returns array of product objects from Snipcart
 */
async function getSnipcartInventory() {
  try {
    const snipApi = 'https://app.snipcart.com/api/products?limit=100';
    const snipKey = process.env.SNIPCART;
    const snipSecret = Buffer.from(`${snipKey}:`).toString('base64');
    const config = {
      url: snipApi,
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${snipSecret}`
      }
    };

    const response = await axios(config);

    return response.data.items;
  } catch (error) {
    console.error(error);
  }
}

/**
 * @returns array of current product objects
 */
module.exports = async function () {
  const productsDir = path.join(__dirname, '/products');
  const productFiles = fs.readdirSync(productsDir);
  const snipcartInventory = await getSnipcartInventory();

  const productsCurrent = productFiles
    .reduce((acc, file) => {
      const productData = JSON.parse(
        fs.readFileSync(path.join(productsDir, file), { encoding: 'utf-8' })
      );
      if (productData.currentListing) acc.push(productData);

      return acc;
    }, [])
    .map((product) => {
      const snipProduct = snipcartInventory.find(
        (p) => p.userDefinedId === product.id
      );
      product.stockOnHand = snipProduct.stock;
      product.imgPrimary = imgFileName(product.imgPrimary);
      product.imgSecondarySet = secondaryImgFileNames(product.imgSecondarySet);

      return product;

      function imgFileName(url) {
        const fileNameIndex = url.split('/').length - 1;
        return `/${url.split('/')[fileNameIndex]}`;
      }

      function secondaryImgFileNames(arr) {
        if (arr.length < 1) {
          return arr;
        }

        return arr.map((img) => imgFileName(img));
      }
    });

  return productsCurrent;
};
