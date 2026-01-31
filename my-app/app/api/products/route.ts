import { NextRequest } from 'next/server';
import { client } from '../../../lib/client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('categoryId');

  if (!categoryId) {
    return new Response(JSON.stringify({ error: 'categoryId is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
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
      { categoryId }
    );
    return new Response(JSON.stringify({ products }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}