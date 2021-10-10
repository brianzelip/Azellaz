# Maintenance notes

## Adding info flash for December 2020

> All orders made Dec 9-18 will ship out Dec 19, 2020

### New files

- \_includes/flash.html

### Files upadted

- \_config.yml
- \_includes/shop.html
- \_includes/product-page.html
- \_includes/holiday-flash.html

### Description

Created a resulable flash component include that accepts parameters. Then made a further abstracted holiday-flash.html component that calls the flash component with holiday parameters.

### Turn the holiday flash on/off

Set `site.holiday_flash_is_active` to false.

### Change the holiday flash message

Edit `site.holiday_flash_message` accordingly.

## Re-opening Azellaz after being closed for 2018 holidays

Here are the files that changed and how to update them to re-open Azellaz.com:

- `shop.html`: delete `{% include hiatus-flash.html %}`
- `product-page.html`: uncomment the buy button parent
- `product-page.html`: delete the `section` parent of the `hiatus-flash.html` include
- `about.html`: delete the `section` parent of the `hiatus-flash.html` include
- `contact.html`: delete the `section` parent of the `hiatus-flash.html` include

## Images for SEO metadata per page

Want to change the meta image for a page? Copy the image to images/meta/, and update the appropriate property in \_config.yml.

See changelog v1.9.0 for further discussion.

## Generating new product pages when store state changes

Need to run `npm run newPreJekyllBuildProductPages` whenever Abbie updates the items currently available in the store.
