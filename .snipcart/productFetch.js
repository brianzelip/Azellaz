const process = require('process');
const axios = require('axios');

/**
 * Make post request to Snipcart API for Snipcart to fetch product data,
 * see https://docs.snipcart.com/v2/api-reference/products#post-products
 *
 * @param {String} fetchUrl | URL of product for Snipcart to fetch
 * @returns {Object} Snipcart post response data
 */
module.exports = async function (fetchUrl) {
  try {
    const snipApi = 'https://app.snipcart.com/api/products';
    const snipKey = process.env.SNIPCART_POST;
    const snipSecret = Buffer.from(`${snipKey}:`).toString('base64');

    const config = {
      method: 'post',
      url: snipApi,
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${snipSecret}`
      },
      data: { fetchUrl }
    };

    const snipcartPost = await axios(config);

    return snipcartPost.data;
  } catch (error) {
    console.error(error);
  }
};
