import { client } from '../../../lib/client';
import { getProductBySlugQuery } from '../../../lib/queries';
import { enLabels, formatCurrency } from '../../../lib/i18n';
import { useCart } from '../../../lib/cart-context-localstorage';
import { CartItem } from '../../../types';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug] {
      _id,
      title,
      slug,
      price,
      priceWithoutDiscount,
      badge,
      "imageUrl": image.asset->url,
      category->{
        _id,
        _ref,
        title,
        slug
      },
      inventory,
      description
    }[0]`,
    { slug }
  );

  if (!product) {
    notFound();
  }

  // Client component wrapper for cart functionality
  return <ProductPageContent product={product} />;
}

function ProductPageContent({ product }: { product: any }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      productId: product._id,
      title: product.title,
      description: product.description,
      price: product.price,
      priceWithoutDiscount: product.priceWithoutDiscount,
      badge: product.badge,
      imageUrl: product.imageUrl || '',
      categoryId: product.category._id,
      quantity: 1,
    };

    addToCart(cartItem);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            {product.imageUrl ? (
              <div className="h-96 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

            {product.badge && (
              <span className="bg-red-500 text-white text-sm px-3 py-1 rounded mb-4 inline-block">
                {product.badge}
              </span>
            )}

            <div className="my-6">
              <p className="text-gray-700 mb-4">{product.description}</p>

              <div className="text-2xl font-bold my-4">
                {product.priceWithoutDiscount && product.priceWithoutDiscount > product.price ? (
                  <>
                    <span className="text-red-600">{formatCurrency(product.price)}</span>
                    <span className="line-through text-gray-500 ml-3 text-base">{formatCurrency(product.priceWithoutDiscount)}</span>
                  </>
                ) : (
                  <span>{formatCurrency(product.price)}</span>
                )}
              </div>

              <div className="mb-6">
                <p className="text-gray-600">
                  Category: <span className="font-medium">{product.category.title}</span>
                </p>
                <p className="text-gray-600">
                  Stock: <span className="font-medium">{product.inventory} available</span>
                </p>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg w-full"
              >
                {enLabels.addToCart}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}