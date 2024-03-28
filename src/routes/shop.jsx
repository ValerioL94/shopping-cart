import '../styles/shop.css';
import { useLoaderData, Form } from 'react-router-dom';

export default function Shop() {
  const { products } = useLoaderData();

  return (
    <div id="shop-page">
      <div>
        <Form id="search-form" role="search">
          <input id="search-bar" type="search" />
          <select name="categories" id="categories">
            <option value="">All</option>
          </select>
        </Form>
      </div>
      <div id="cards-container">
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
