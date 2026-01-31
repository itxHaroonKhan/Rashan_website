// GROQ queries for fetching data from Sanity

export const getAllCategoriesQuery = `*[_type == "category"] {
  _id,
  title,
  slug,
  image {
    asset->{
      _ref,
      url
    }
  }
}`;

export const getAllProductsQuery = `*[_type == "product"] {
  _id,
  title,
  slug,
  price,
  priceWithoutDiscount,
  badge,
  image {
    asset->{
      _ref,
      url
    }
  },
  category->{
    _id,
    _ref
  },
  inventory,
  description
}`;

// Note: Parameterized queries are handled directly in components for security
// These functions return the query string, but parameters are passed separately to client.fetch()
export const getProductsByCategoryQuery = `*[_type == "product" && references($categoryId)] {
  _id,
  title,
  slug,
  price,
  priceWithoutDiscount,
  badge,
  image {
    asset->{
      _ref,
      url
    }
  },
  category->{
    _id,
    _ref
  },
  inventory,
  description
}`;

export const getProductBySlugQuery = `*[_type == "product" && slug.current == $slug] {
  _id,
  title,
  slug,
  price,
  priceWithoutDiscount,
  badge,
  image {
    asset->{
      _ref,
      url
    }
  },
  category->{
    _id,
    _ref,
    title,
    slug
  },
  inventory,
  description
}[0]`;