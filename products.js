const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }
  return response.json();
};

export async function getProducts(category, query) {
  function filterSearch(product) {
    if (product.title.toLowerCase().includes(query.toLowerCase()))
      return product;
  }
  try {
    const categories = await fetchData(
      'https://fakestoreapi.com/products/categories'
    );
    let products = await fetchData('https://fakestoreapi.com/products');
    if (category) {
      products = products.filter((product) => product.category === category);
    }
    if (query) {
      products = products.filter(filterSearch);
    }
    return { products, categories };
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
