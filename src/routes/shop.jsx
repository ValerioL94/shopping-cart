import '../styles/shop.css';
import { useLoaderData, Form, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Shop() {
  const { products } = useLoaderData();
  const categories = [...new Set(products.map((product) => product.category))];
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');

  function filterSearch(product) {
    if (product.title.toLowerCase().includes(query.toLowerCase()))
      return product;
  }
  function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  return (
    <div id="shop-page">
      <div>
        <Form id="search-form" role="search">
          <input
            id="search-bar"
            type="search"
            aria-label="search products"
            placeholder="Search"
            name="search-bar"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <select
            name="categories"
            id="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {titleCase(category)}
              </option>
            ))}
          </select>
        </Form>
      </div>
      <div id="cards-container">
        {(category
          ? products.filter((product) => product.category === category)
          : products
        )
          .filter(filterSearch)
          .map((product) => (
            <div key={product.id} className="card" tabIndex={0}>
              <NavLink to={`${product.id}`}>
                <img
                  src={product.image}
                  alt={product.description}
                  className="cardImage"
                />
                <h2 className="cardTitle">{product.title}</h2>
                <p className="cardPrice">${product.price}</p>
              </NavLink>
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
