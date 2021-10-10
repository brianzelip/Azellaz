/**
 * Filter image name from url
 *
 * @param {String} url
 * @returns {String}
 */
module.exports = function (url) {
  // const exampleUrl =
  //   'https://res.cloudinary.com/dn6buftkw/image/upload/v1633774808/portfolio/03-crossbody-indigo-shibori-white-maroon-leather-front-by-Azellaz_okww3o.jpg';

  const urlPrefixSplit = '/portfolio/';
  const filenameSuffixRE =
    /_[a-zA-Z0-9]+\.(jpg|JPG|jpeg|JPEG|png|gif|GIF|webp)$/;
  const filenamePrefixRE = /^[0-9]+-/;
  const bylineRE = /(\sby\sAzellaz)$/;

  const name = url
    .split(urlPrefixSplit)[1]
    .split(filenameSuffixRE)[0]
    .split(filenamePrefixRE)[1]
    .replaceAll('-', ' ')
    .split(bylineRE)[0]
    .trim();

  return `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
};
