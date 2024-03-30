const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }
  return response.json();
};

export async function getProducts() {
  try {
    const products = await fetchData('https://fakestoreapi.com/products');
    return products;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getProduct(id) {
  try {
    const product = await fetchData('https://fakestoreapi.com/products/' + id);
    return product;
  } catch (err) {
    throw new Error(err.message);
  }
}
