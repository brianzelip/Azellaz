---
layout: product
pagination:
  data: currentProducts
  size: 1
  alias: product
  addAllPagesToCollections: true
permalink: '{{ product.slug }}/'
tags: product
eleventyComputed:
  title: '{{ product.displayName }} {{ site.meta.byline }}'
  description: '{{ product.descriptionShort }}'
  image: '{{ site.cloudinary.cloudinary }}{{ product.imgPrimary }}'
  imageAlt: '{{ product.displayName }} {{ site.meta.byline }} {{ product.descriptionShort }}'
---

{{ product.body }}
