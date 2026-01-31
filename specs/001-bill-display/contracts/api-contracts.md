# API Contract: Product Data Fetching

## Overview
This document describes the API contracts for fetching product and category data from Sanity CMS.

## Endpoints

### GET /api/categories
Fetches all available product categories.

**Request**:
- Method: GET
- URL: `/api/categories`
- Headers: None required
- Query Parameters: None

**Response**:
- Status: 200 OK
- Content-Type: application/json
- Body:
```json
{
  "categories": [
    {
      "_id": "string",
      "title": "string",
      "slug": {
        "current": "string"
      },
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "string",
          "_type": "reference"
        }
      }
    }
  ]
}
```

### GET /api/products
Fetches all published products.

**Request**:
- Method: GET
- URL: `/api/products`
- Headers: None required
- Query Parameters: None

**Response**:
- Status: 200 OK
- Content-Type: application/json
- Body:
```json
{
  "products": [
    {
      "_id": "string",
      "title": "string",
      "slug": {
        "current": "string"
      },
      "price": "number",
      "priceWithoutDiscount": "number",
      "badge": "string",
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "string",
          "_type": "reference"
        }
      },
      "category": {
        "_ref": "string",
        "_type": "reference"
      },
      "inventory": "number",
      "description": "string"
    }
  ]
}
```

### GET /api/products/category/{categoryId}
Fetches products by category.

**Request**:
- Method: GET
- URL: `/api/products/category/{categoryId}`
- Headers: None required
- Path Parameter: categoryId (string)

**Response**:
- Status: 200 OK
- Content-Type: application/json
- Body:
```json
{
  "products": [
    {
      "_id": "string",
      "title": "string",
      "slug": {
        "current": "string"
      },
      "price": "number",
      "priceWithoutDiscount": "number",
      "badge": "string",
      "image": {
        "_type": "image",
        "asset": {
          "_ref": "string",
          "_type": "reference"
        }
      },
      "category": {
        "_ref": "string",
        "_type": "reference"
      },
      "inventory": "number",
      "description": "string"
    }
  ]
}
```

### GET /api/product/{slug}
Fetches a single product by its slug.

**Request**:
- Method: GET
- URL: `/api/product/{slug}`
- Headers: None required
- Path Parameter: slug (string)

**Response**:
- Status: 200 OK
- Content-Type: application/json
- Body:
```json
{
  "_id": "string",
  "title": "string",
  "slug": {
    "current": "string"
  },
  "price": "number",
  "priceWithoutDiscount": "number",
  "badge": "string",
  "image": {
    "_type": "image",
    "asset": {
      "_ref": "string",
      "_type": "reference"
    }
  },
  "category": {
    "_ref": "string",
    "_type": "reference"
  },
  "inventory": "number",
  "description": "string"
}
```