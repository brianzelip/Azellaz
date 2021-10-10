# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## README

This document started at v1.6.10 and only documents work after v1.6.10.

## [Unreleased]

### TODO

- carousel landing page
- validate that for each product that is to be included in the shop, each product has a unique ID; currently, `AZ00` is the default `id` for new products. This is helpful for data input, but hairy for making snipcart work via unique ids for each product. (The thin-ness isn't only due to not-validating here, it's the fact that the snipcart database is distinct from this front end pipeline. ie: It's a much bigger issue!)
- Update `_includes/shop-grid-item.html` to render "OUT OF STOCK" when `product.inStock === 0`

### Talk w/ Abbie

- do you like call out sections with bigger text, a la https://crosby-demo.squarespace.com/our-story?
- have a stories/articles/info-sharing section - something that doesn't have to be updated, a la https://hester-demo.squarespace.com/blog
- have a stockists page, a la https://ventura-demo.squarespace.com/stockists

## [3.6.0] - 2021-10-10

Offload all photos in images to Cloudinary and organize image assets.

### Added

- src/\_data/portfolio.json: add portfolio image cloudinary urls as array of arrays of a url string in a NetlifyCMS controlled file
- src/utils/filters/: add 11ty filter function to derive image name (description) from url

### Updated

- src/admin/config.yml: add file collection for portfolio.json; got it working but the data shape is undesired (array of arrays), still looking to create an array of strings
- src/\_includes/portfolio-grid.html: reference new data
- src/\_includes/portfolio-grid-item.html: use new data and filter to render each portfolio image
- az.css: removed some unused classes regarding hero image and logo styles
- images/portfolio: archived
- images/meta: archived
- images/\*.{png|jpg}: archived
- images/\*.svg: archived those unused in markup

### Removed

- src/\_data/portfolio.js

## [3.5.2] - 2021-10-08

Update Basscss dependency.

### Updated

- package\*: Update to @bzelip/basscss7.1.1@1.0.0

## [3.5.1] - 2021-10-08

Update netlifycms config about page path.

### Updated

- src/admin/config.yml: Update path to about page

## [3.5.0] - 2021-10-08

Reorganize codebase around src/ dir.

### Updated

- Move the following from / to /src/
  - \_data
  - \_includes
  - \_layouts
  - admin
  - crawlers
  - css
  - fonts
  - images
  - js
  - lambda
  - .eleventyignore
  - about.md
  - contact.md
  - index.md
  - portfolio.md
  - product.md
- .eleventy.js: update config paths
- netlify.toml: update lambda path
- admin/config.yml: update data path

## [3.4.1] - 2021-10-08

Replace official Basscss dependency with [@bzelip/basscss7.1.1](https://www.npmjs.com/package/@bzelip/basscss7.1.1) (smaller module, no dependencies, etc.).

### Updated

- package.json: replaced basscss@7.1.1 with @bzelip/basscss7.1.1
- az.css: import Basscss by module name

## [3.4.0] - 2021-10-06

Replace local Basscss with npm.

### Added

- package.json: Add Basscss@7.1.1 dependency

### Updated

- css/az.css: import Basscss from node_modules (yuck)

### Removed

- css/basscss@7.1.1.min.css

## [3.3.1] - 2021-10-06

Miscellaneous fixes, refactors, and edits.

### Added

- crawlers/: Collect files for robots here

### Updated

- admin/: remove front matter, 11ty ignore it, 11ty pass through it
- robots.txt: move to crawlers/
- humans.txt: move to crawlers/
- sitemap.njk: move to crawlers/
- \_data/currentProducts.js: Add comments on why the data is not 11ty computed
- .eleventy.js:
  - refactor passthrough of pages for robots
  - watch css/
  - explicitly list templates
- .eleventyignore: ignore admin/
- package.json: add debug script

## [3.3.0] - 2021-10-04

Replace node-fetch dependency with axios in lambda.

### Updated

- lambda/:
  - Replace node-fetch with axios
  - bump minor
- package.json:
- readme.md: Add npm version badge

### Removed

- node-fetch dependency in lambda/package.json

## [3.2.0] - 2021-10-04

Shift PostCSS processing to an 11ty JavaScript template, remove the postcss-cli dependency.

Adapted from [EleventyOne](https://github.com/philhawksworth/eleventyone/blob/master/src/site/css/styles.11ty.js).

### Added

- css/postcss.11ty.js: new JS template that processes az.css

### Updated

- css/src/ -> css/
- package.json: update scripts
- \_includes/head.html: update css link
- .eleventy.js: update images passthrough
- .eleventyignore: delete image ignores
- humans.txt: Add tech metadata

### Removed

- postcss-cli dev dependency
- css/src/
- css/dist/
- all images not used in production moved to webmaster/archive/images

## [3.1.0] - 2021-10-02

The postcss-color-function plugin silently stopped working, I guess as a result of its deprecation due to W3G CSS activity. Also, it was an extra dependency to install at build time on netlify, so getting rid of it is nice for perf.

### Updated

- az.css: refactor all uses of `color()` with the output of the plugin via a past netlify preview
- package.json: Update netlify build script key name

### Removed

- postcss-color-function dev dependency

### Added

- .node-version: to tell Netlify build image what Node version to use

## [3.0.0] - 2021-10-02

Refactor the codebase from Jekyll to 11ty

## [2.7.1] - 2021-07-22

Fix sitemap missing product links from new products collection

### Updated

- sitemap.xml: loop over products collection data

## [2.7.0] - 2021-07-22

- Bump Ruby version to v2.7.2 and update gems after local dev machine OS upgrade, and news of [Netlify EOL for the current Azellaz build image (Trusty)](https://answers.netlify.com/t/please-read-end-of-support-for-trusty-build-image-everything-you-need-to-know/39004).
- Refactor product pages as jekyll collection as the liquid variable approach broke in jekyll v4.2.0.

### Added

- \_products/: `mv products/ _products` for jekyll collections directory syntax

### Updated

- .ruby-version
- Gemfile.lock
- package.json: new jekyll serve command
- .gitignore: new .jekyll-cache
- newProductPages.js: update productPagesDir
- \_includes/shop-grid.html: Iterate over products collection
- \_data/readme.md: Add note about \_data/options.json
- css/src/az.css: Add `line-break` rule to sold out sticker to fix break between words on Safari

### Removed

- products/: rename \_products/ for new jekyll version

## [2.6.0] - 2020-12-07

- branch: master
- description: Show product pic number 2 on shop item hover instead of product name and price

### Updated

- \_includes/shop-grid-item.html

## [2.5.0] - 2020-12-06

- branch: master
- description
  - Abstract out a flash component that can be used for various needs
  - Abstract out a higher order holiday flash component that uses the flash component

### Added

- \_includes/ flash.html

### Updated

- \_config.yml
- \_includes/shop.html
- \_includes/product-page.html
- \_includes/holiday-flash.html

## [2.4.2] - 2020-12-02

- branch: master
- description: Reverse order of shop items, fix vulnerabilities

### Updated

- \_includes/shop-grid.html: manipulate products array to reverse shop items order
- package-lock.json

## [2.4.1] - 2020-06-24

- branch: dev
- description: Delete google analytics; remove Etsy links

### Updated

- \_includes/footer.html:
  - Delete ga script
  - Delete Etsy links
  - Add email icon and link
  - Delete blurb about snipcart and netlify
- css/src/font-awesome@4.7.0.CUSTOM.css: Add fa-envelope-o icon
- contact.html: Remove Etsy link
- \_config.yml: Remove Etsy data

## [2.4.0] - 2020-06-22

- branch: dev
- description: Use Netlify Functions to create an endpoint for the Snipcart webhook to hit; this will fix the issue where the snipcart web hook hits the netlify build hook twice after a new purchase, which makes the build process run twice instead of the more efficient once.

### Added

- lambda/: where the snipcart webhook listener function lives
- netlify.toml

### Updated

- \_config.yml: Exlude lambda/, clean up

## [2.3.1] - 2020-06-18

- branch: dev
- description: Remove `stockOnHand` from source files, instead handing over the source of truth for stock data to snipcart.

### Updated

- admin/config.yml
- \_data/products/\*.json

## [2.3.0] - 2020-06-18

- branch: dev
- description: Leverage Snipcart API and webhooks, and Netlify build hook, to auto fetch product stock data at build and build site on new order event
  - snipcart API to get product stock number (so that snipcart product dashboard is the source of truth for product stock quantities, so that the front end never has to be updated manually when a product is sold out)
  - snipcart webhook to send POST request to netlify; unfortunately, the snipcart webhook fires for all snipcart events, not just orders, so in our case, two webhookd POSTs are fired after each order (order event, and customer update event) - it's ineefficient, but it works!
  - netlify build hook URL (created via netlify dashboard, not in project files), as an endpoint for snipcart to hit with its webhook

### Updated

- install simple-get for async http request for snipcart product data
- newProductPages.js: Refactor stock data via snipcart fetch

## [2.2.0] - 2020-04-22

- branch: dev
- description: Make the About page editable via cms

### Updated

- admin/config.yml: Define the about page
- about.md: Create editable markdown file for about content
- about.html: Move to \_layouts, extract editable content
- az.css: Add about page markdown styles

## [2.1.0] - 2020-02-23

- branch: master
- description: Add 'sold-out' context:
  - add stickers to the appropriate shop items
  - disable buy button on product pages with sold out text inside the button

### Updated

- \_includes/shop-grid-item.html
- \_includes/product-page.html
- az.css: add `.sticker` based on https://www.bookhou.com/collections/shop-update

## [2.0.1] - 2020-02-21

- branch: master
- description: Refactor shop filter buttons to only look for the first word of a multi-word category, whether type or material (ie: "circular pouch")

### Updated

- shop-filter-buttons.html

## [2.0.0] - 2020-02-20

- branch: dev
- description: Merge latest dev work on implementing Netlify CMS into master branch. The major change comes in because there is a new product data model and product page creation/editing/publication workflow via Netlify CMS.

### Notes

For updating product info using the cms, go to azellaz.com/admin.

Add users to cms login via Netlify Identity.

Only the current product pages are built at build time via `newProductPages.js` before the jekyll build. They are generated in `products/`.

All product data, not just current live products, have associated json files in `_data/products/`. These are the files edited by netlify cms.

The bag options (types and materials) have been abstracted into `_data/options.json`. In the future, I can make a netlify cms "file collection" out of this file which will allow AZ to update the filter option buttons on the shop.

### Added

## [1.13.0] - 2020-01-29

- branch: cloudinary
- description: refactor media library via Cloudinary

### Audit of current image transformations

1. Minimally process raw JPG from camera
2. ~~Make a new directory called `PHOTOS`, then copy all of the edited photos into `PHOTOS`~~ (don't have to do this)
3. Run ImageOptim
4. ~~Rename raw file extensions from `.JPG` to `.jpg`~~ (don't have to do this)
5. ~~Create two new directories titled `thumbs-med` and `thumbs-sm`~~ (don't have to do this)
6. ~~Copy all photos in `PHOTOS` to each of the `thumbs` directories~~ (don't have to do this)
7. ~~Add the appropriate prefix to each of the `thumbs` directories~~ (don't have to do this)
8. Resize the photos in each of the thumbnail directories as appropriate

- `mogrify -resize 25% thumbs-med/*.jpg && mogrify -resize 100x100 thumbs-sm/*.jpg`

9. ~~Move all of the photos inside `PHOTOS/` to `../products/` as the largest set of photos, then move (or add to) `thumbs-med/` and `thumbs-sm/` to `../products/`~~ (don't have to do this)

### TODO via Cloudinary

1. Minimally process raw JPG from camera
2. Run ImageOptim
3. Resize the photos in each of the thumbnail directories as appropriate

```bash
# Azellaz v1
# REAL CODE
mogrify -resize 25% thumbs-med/*.jpg && mogrify -resize 100x100 thumbs-sm/*.jpg
```

```html
<!-- Azellaz v2 -->
<!-- FAKE CODE EXCEPT FOR CLOUDINARY IMAGE TRANSFORMATIONS -->
<img
  src="https://res.cloudinary.com/demo/image/upload/azellaz/w_0.25/thumbs-med-product.jpg"
/>
<!-- see https://cloudinary.com/documentation/image_transformations?query=scale&c_query=Resizing%20and%20cropping%20images%20%E2%80%BA%20scale#limit -->
<img
  src="https://res.cloudinary.com/demo/image/upload/azellaz/w_100,h_100,c_limit/thumbs-sm-product.jpg"
/>
```

### Thoughts on product data model re: images

Maybe all image "fields" or units should have their associated metadata - no, because then the data inputter has to manually input all that. Go w/ the template being the source for how the base image is used.

### Cloudinary test runs

Steps taken:

1. Make 3 copies of the original image (11 MB) of the current home page hero image (`images/staging/PHOTOS/carousel/small-tote-indigo-shibori-white-maroon-leather-lookbook3.jpg`).
2. Apply the following ImageOptim config to each photo
   1. Strip metadata, no lossy minification, optimization level `extra`; the output saved 5.3% (10.7 MB end size)
   2. Strip metadata, enable lossy minification to 99% jpg quality, optimization level `extra`, the output saved 14.3% (7.9 MB end size)
   3. Strip metadata, enable lossy minification to 97% jpg quality, optimization level `extra`, the output saved 50.3% (5.6 MB end size)

```yaml
image_2_with_q_auto_transformation:
  - url: https://res.cloudinary.com/dn6buftkw/image/upload/v1580318832/q_auto/hero-at-97-percent-optimized_small-tote-indigo-shibori-white-maroon-leather-lookbook3.jpg
  - transfer_size: 1.27 MB
```

### Lineage of initial Azellaz Cloudinary data

1. Make a copy of all files in `images/raw-dog-and-others/archived-from-staging/edited thru 2017-06-28/new - needs to be optimized`

2. Run imageoptim with standard jpg exif strip, no lossy minification, and insane optimization speed

3. Upload to cloudinary under official Azellaz account

It's number 2 above that needs to be repeated for each image before uploading to cloudinary

### Added

### Updated

- az.css: Change `.mainBag4` background-image url to a cloudinary url that includes a quality transformation -- the difference is
- every template that renders an image

## [1.12.3] - 2020-01-25

- branch: dev
- description: Fix version number DOH!

### Updated

- package\*.json

## [1.12.2] - 2020-01-25

- branch: dev
- description: Keep `products/` via .gitkeep for the Netlify build to succeed!

### Added

- products/.gitkeep

### Updated

- newProductPages.js: delete files in products/ only if not .gitkeep

## [1.12.1] - 2020-01-25

- branch: dev
- description: update products data dir now that the product page creation flow is ready

### Updated

- \_data/allproducts/: rename \_data/products/
- admin/config.yml: update products collection folder path
- newProductPages.js: update productDataDir
- productsDataToProductsFiles.js: Move to `archive/code/`

## [1.12.0] - 2020-01-25

- branch: dev
- description: Update front end to implement new back end

### Updated

- admin/config.yml: fix `imgSecondarySet` value for yaml array in front matter
- \_config.yml: Add `defaults` property for product json files for rendering the shop based on the new product data model (individual json files per product, vs one json file for all products)
- newProductPages.js: add `jsArray2Yaml()` and update yaml front matter
- .gitignore: ignore `products/*.md` dir since they are now auto-generated
- package.json: Add `refreshProductPages` step to start script
- \_includes/shop-grid.html: refactor around new product data model
- \_includes/shop-grid-item.html: refactor around new product data model
- \_includes/product-page.html: refactor around new product data model
- \_includes/product-thumbnails.html: refactor around new product data model
- \_includes/meta-product.html: refactor around new product data model

## [1.11.0] - 2020-01-24

- branch: dev
- description: Get netlify cms back end working (ie: publishing new pages and editing old pages). The principle dynamic is between `admin/config.yml` and `_data/allproducts/*.json`, and then the yaml front matter in the auto-generated pages (via `newProductPages.js`) in `products/*.md`.

This really represents v2, since the way for the staff user to update the site has now changed. Although it's still possible to edit json files in the repo; though doing so will always be possible.

### Documentation with this bump:

1. Make new cms users

BZ Netlify > azellaz > Identity > Invite Users > input user email

2. Login

url: https://www.azellaz.com/admin

3. Un/Publish a page

a. Login
b. Choose the collection of information to edit on the left (currently only "Products")
c. Choose file to edit, or click the "New Products" button
d. Toggle the "Include item in shop?" on to publish page, toggle it off to not publish or unpublish page

1. `products/` is now auto-refreshed via

`newProductPages.js` is called before `jekyll build` via `npm build`

5. `_data/products.json` has been destructured into `_data/allproducts/*.json`

6. Made data parity between each product json file and the Netlify CMS config

### Added

- productsDataToProductsFiles.js - single-purpose tool to use the work already put into defining the data in `_data/products.json` by creating new data files for each object
- \_data/allproducts/: A json file for each product contained in \_data/products.json. This is the folder that Netlify CMS looks at for editing products collection data.

### Updated

- admin/config.yml:
  - add the appropriate fields to match product data model
  - change the branch and site_url fields for dev work
- \_includes/meta-product.html: refactor use of slug
- \_includes/product-page.html: refactor use of slug
- \_includes/product-thumbnails.html: refactor use of slug
- \_layouts/product.html: remove for loop and if statement at root of html

## [1.10.0] - 2020-01-20

- branch: init-netlifycms
- description: Wire up Netlify CMS

### Added

- /admin
  - index.html
  - config.yml

### Updated

- index.html: Added netlify identity widget to bottom of page

## [1.9.5] - 2019-08-26

### Meta

- branch: corner-borders-patch-2
- description: Previous patch missed unrounding the hero page bg-darken wrappers

### Updated

- hero.html: Unround the `<p>` corners
- header.html: Unround the `<nav>` corners

## [1.9.4] - 2019-08-23

### Meta

- branch: corner-borders-patch
- description: Previous patch missed unrounding the flash borders

## [1.9.3] - 2019-08-21

### Meta

- branch: corner-borders
- description: Refactor all rounded corners to not rounded
  - Also thinking of design possibilities while looking at https://www.pawenastudio.com/ and https://shopdanabechert.com/; see these notes in design.md

### Added

- design.md: Notes on future design changes

### Updated

- \_includes/hero.html
- \_includes/header.html
- \_includes/shop-filter-btns.html

## [1.9.2] - 2019-08-21

### Meta

- branch: master
- description: Old products were still getting generated because of a folder that was still around from the debugging phase before I implemented the newProductPages.js workflow.

### Deleted

- new-products/

## [1.9.1] - 2019-08-20

### Meta

- branch: update-product-pages
- description: I noticed the products/ dir has more pages than are currently listed in the shop. This means that the last time we updated products.json and the shop, we didn't run newProductPages.js.

This needs to be added to some docs!

### Updated

- products/
- maintenance.md

## [1.9.0] - 2019-08-20

### Meta

- branch: metadata-images
- description: I need to get a grasp on the seo metadata images. Hithertofore, the "featured image" base file name was added to \_config.yml, but the file name was an older convention that Abbie changed soon after, but the metadata featured image did not get updated, so the image has been broke in the twitter card for some time now. Instead of hardcoding in the name of the preferred image at any given time, there should be some directory in images/ that is named something like images/meta/. There should be some docs that mention the meta images as a task that needs to be maintained over time. (there should be other maintenance things listed in the docs too, like deleting/generating new product pages when products.json is updated, meta images, twitter card validator for new pages, etc.)

**TODO** Also, the metadata includes are filled with repetition. While the last release abstracted out the metadata page modules from one long include, they can still be boiled down more.

Also, \_config.yml needs to be organized into sections, like "social links", "images", "meta images", "prose content", etc.

### Added

- images/meta/: create dir with duplicated images to be used strictly for metadata

### Updated

- \_config.yml: refactored meta image property names
- \_includes/meta-\*.html: Updated image content, removed meta tags with empty keyword content

## [1.8.0] - 2019-08-20

### Meta

- branch: seo
- description: Started out by wanting to add metadata for the portfolio page. Then scope changed to refactor the approach to generating page metadata.

### Added

- \_includes/meta-about.html
- \_includes/meta-contact.html
- \_includes/meta-home.html
- \_includes/meta-portfolio.html
- \_includes/meta-product.html

### Updated

- head.html: replaced hardcoded logic with includes

## [1.7.1] - 2019-08-20

### Meta

- branch: master
- description: quick patch home page buttons

### Updated

- \_includes/hero.html: Add portfolio button
- \_includes/shop-filter-buttons.html: Change font weights to normal

## [1.7.0] - 2019-08-19

### Meta

- branch: gallery
- description:
  - add a gallery of older products
  - clean up other odds and ends (like adding this changelog)

The project started out named 'Gallery', but ended up with 'Portfolio'.

### Added

- CHANGELOG.md
- ~~gallery.json~~: I started by creating a json file with an array of all the image gallery file names, but this introduced another layer of abstraction that would need maintenance every time Abbie wants to change the order of the gallery display. Instead of maintaining this data file, I utilized Jekyll's [static_files](https://jekyllrb.com/docs/static-files/) api, which allows me to loop over an arbitrary collection of static files, like those in images/Gallery!
- portfolio.html
- portfolio-grid.html
- portfolio-grid-item.html

### Updated

- package\*: Responded to a npm audit by upgrading braces to 2.3.1, still got the warning; upgraded to 2.3.2, still got the warning. So even though package.json is now polluted with this sub sub sub dependency, I'm keeping it as is and will deal with audits down the line.
- Gemfile.lock: I ran into build problems when working on this feature branch on a different computer with a newer ruby set up. I banged my head against the wall for a good amount of time, then figured it out. The 3 files associated with the ruby nature of the project are:

  1. .ruby-version: this is useful for netlify, as well as local development, but not necessary
  2. Gemfile: this is the main file, basically the dependencies and devDependencies in node - it just lists the main libraries to bring into the project (of course, they bring in other depdencies too).
  3. Gemfile.lock: this is auto generated, doesn't seem to care about the ruby -v, but does record bundle -v

  _Note_: the bundle -v is impacted by the presence of "BUNDLED WITH" in a Gemfile.lock if it exists. So if you want to see a specific bundle -v, you may have to delete the lock file, then run bundle -v to see the desired -v, then run bundle install to re-create the lock file.

**Don't forget about RVM!**

In the future, when wanting to upgrade or downgrade ruby -v and bundle -v, use RVM to install ruby -v, then use gem to install bundle -v. Then run `bundle install` to output the Gemfile.lock.

- see this [!so answer](https://stackoverflow.com/a/54876869/2145103)
- and [this informative !so post](https://stackoverflow.com/a/44980854/2145103)
- az.css: Add some color styles for design debugging
- shop-fixed-logo.html: Renamed fixed-logo.html for greater scope
- \_config.yml: Added a `defaults` property to remove a layer of abstraction in maintaining the gallery photos by "adding front matter" to the gallery images. This pseudo front matter makes it easy to query for a set of static files and do something with them, via the Jekyll [static_files api](https://jekyllrb.com/docs/static-files/). Via Jekyll docs:
  > The `defaults` key holds an array of scope/values pairs that define what defaults should be set for a particular file path
