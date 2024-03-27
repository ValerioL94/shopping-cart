import fetchData from './products';

export async function productsLoader() {
  const products = await fetchData();
  return { products };
}
