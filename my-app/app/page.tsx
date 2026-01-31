import { client } from '../lib/client';
import CategoryCard from '../components/CategoryCard';

export default async function HomePage() {
  const categories = await client.fetch('*[_type == "category"] { _id, title, slug, "imageUrl": image.asset->url }');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Rashan Grocery</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted online grocery store for fresh and quality products delivered to your doorstep.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category: any) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">Fresh groceries delivered to your door</p>
      </div>
    </div>
  );
}