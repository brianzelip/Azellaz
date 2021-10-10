# Source code for [Azellaz.com](https://www.azellaz.com)

![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/brianzelip/Azellaz.com) [![Netlify Status](https://api.netlify.com/api/v1/badges/21970328-5c87-4263-8b07-59810e5e7214/deploy-status)](https://app.netlify.com/sites/azellaz/deploys)

## Add new products

1. Go to the Azellaz content manager [https://azellaz.com/admin](https://azellaz.com/admin)

   1a. Click the "New Products" button

   1b. Fill out product details

   1c. Login to Cloudinary for images

   1d. Save product info

2. Go to the Snipcart dashboard [https://snipcart.com/](https://snipcart.com/)

   2a. Fetch the new product page (products > fetch)

   2b. Set the stock amount (products, then click "Actions")

3. Manually trigger deploy via Netlify dashboard [https://netlify.com](https://netlify.com)

## Update existing products

1. Go to the Azellaz content manager [https://azellaz.com/admin](https://azellaz.com/admin)

   1a. Choose product from list

   1b. Edit product info

   1c. Save product info

## Development

```zsh
npm start
```

---

Content &copy; 2020 [Abbie Zelip](https://www.azellaz.com)

Web app &copy; 2020 [Brian Zelip](http://zelip.me) via [MIT](LICENSE)
