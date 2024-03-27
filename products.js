const getProducts = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }
  return response.json();
};

const fetchData = async () => {
  try {
    const data = await getProducts('https://fakestoreapi.com/products');
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default fetchData;
