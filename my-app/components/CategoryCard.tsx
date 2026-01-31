import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  imageUrl?: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link href={`/categories/${category.slug.current}`}>
      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        {category.imageUrl ? (
          <div className="h-32 w-full">
            <Image
              src={category.imageUrl}
              alt={category.title}
              width={300}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="h-32 w-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}

        <div className="p-4">
          <h3 className="font-semibold text-lg">{category.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;