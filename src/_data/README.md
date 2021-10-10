# Notes about products data

## Snipcart requirements/gotchas

- measurements and length numbers should be quoted strings, not numbers
- measurements and length numbers should only be whole numbers, no decimals
- new product pages need to be fetched by snipcart via https://app.snipcart.com/dashboard/products/fetch

## Updating the list of available products

Set the currentListing property for each product to true or false depending on if Abbie considers the product currently available.

~~**Whenever** the state of currently available products changes, run~~

```bash
npm run refreshProductPages
```

**Note**: this happens automatically via the new build process in v2.

## About options.json

options.json is used in the shop-filter-buttons template.
