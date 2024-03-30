import { getProducts, getProduct } from './products';

export async function productsLoader() {
  const products = await getProducts();
  return { products };
}

export async function productLoader({ params }) {
  const product = await getProduct(params.productId);
  return { product };
}
