/**
 * Export an array of current products, including stock amount
 * from snipcart, for 11ty pagination of the product.md template.
 *
 * While this data is computed from other 11ty global data, it can't
 * be refactored as eleventyComputed data since 11ty can't yet paginate
 * computed data. See https://github.com/11ty/eleventy/issues/1110.
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
