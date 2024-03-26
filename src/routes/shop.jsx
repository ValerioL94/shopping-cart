import { useEffect, useState } from 'react';
import '../styles/shop.css';

const getProducts = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }
  return response.json();
};

export default function Shop() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts('https://fakestoreapi.com/products');
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });
  return (
    <div>
      <h1>Shop page</h1>
      <div className="cards-container">
        {loading && (
          <div className="loading">
            <h1>Just a moment please...</h1>
          </div>
        )}
        {error && (
          <div className="error">
            <h1>{error}</h1>
          </div>
        )}
        {products &&
          products.map((product) => (
            <div key={product.id} className="card" tabIndex={0}>
              <img src={product.image} alt={product.description} />
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

/* 
category 
description
id
image
price
rating: {count: 120 rate: 3.9}
title 
*/
