import { getProducts, getProduct } from './products';

export async function productsLoader({ request }) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const q = url.searchParams.get('q');
  const { products, categories } = await getProducts(category, q);
  return { products, categories, q };
}

export async function productLoader({ params }) {
  const product = await getProduct(params.productId);
  return { product };
}
