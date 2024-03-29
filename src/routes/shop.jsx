import '../styles/shop.css';
import { useLoaderData, Form } from 'react-router-dom';
import { useState } from 'react';

export default function Shop() {
  const { products } = useLoaderData();
  const categories = [...new Set(products.map((item) => item.category))];
  const [category, setCategory] = useState('');
  return (
    <div id="shop-page">
      <div>
        <Form id="search-form" role="search">
          <input id="search-bar" type="search" />
          <select
            name="categories"
            id="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">all</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </Form>
      </div>
      <div id="cards-container">
        {!category &&
          products.map((product) => (
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
        {category &&
          products
            .filter((product) => product.category === category)
            .map((product) => (
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
