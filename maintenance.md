# Maintenance notes

## Todo

- validate that for each product that is to be included in the shop, each product has a unique ID; currently, `AZ00` is the default `id` for new products. This is helpful for data input, but hairy for making snipcart work via unique ids for each product. (The thin-ness isn't only due to not-validating here, it's the fact that the snipcart database is distinct from this front end pipeline. ie: It's a much bigger issue!)
- carousel landing page
- do you like call out sections with bigger text, a la https://crosby-demo.squarespace.com/our-story?
- have a stories/articles/info-sharing section - something that doesn't have to be updated, a la https://hester-demo.squarespace.com/blog
- have a stockists page, a la https://ventura-demo.squarespace.com/stockists

## Generating new product pages when store state changes

Need to run a new build whenever Abbie updates the items currently available in the store.

## Turn the holiday flash on/off

Set `site.flashToggles.holiday_flash_is_active` to false.

## Change the holiday flash message

Edit `site.content.holiday_flash_message` accordingly.

## Images for SEO metadata per page

Want to change the meta image for a page? Add the url to site.json.

See changelog v1.9.0 for further discussion.
