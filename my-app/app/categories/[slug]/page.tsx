import { client } from '../../../lib/client';
import ProductCard from '../../../components/ProductCard';
import { getProductsByCategoryQuery } from '../../../lib/queries';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  // First, get the category by slug to get its ID
  const category = await client.fetch(
    `*[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      slug
    }`,
    { slug }
  );

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-8">
          <p>Category does not exist.</p>
        </div>
      </div>
    );
  }

  // Then get products by category ID
  const products = await client.fetch(
    `*[_type == "product" && references($categoryId)] {
      _id,
      title,
      description,
      price,
      priceWithoutDiscount,
      badge,
      "imageUrl": image.asset->url
    }`,
    { categoryId: category._id }
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 capitalize">{category.title}</h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
}