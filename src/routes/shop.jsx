import { useLoaderData } from 'react-router-dom';
import '../styles/shop.css';

export default function Shop() {
  const { products } = useLoaderData();

  return (
    <div id="shop-page">
      <h1>Shop page</h1>
      <div className="cards-container">
        {products.map((product) => (
          <div key={product.id} className="card" tabIndex={0}>
            <img
              src={product.image}
              alt="product.description"
              className="cardImage"
            />
            <h2 className="cardTitle">{product.title}</h2>
            <p className="cardPrice">${product.price}</p>
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
