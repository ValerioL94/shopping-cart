import '../styles/shop.css';
import { useLoaderData, Form, NavLink, useSubmit } from 'react-router-dom';
import { useEffect } from 'react';

export default function Shop() {
  const { products, categories, q } = useLoaderData();
  const submit = useSubmit();

  function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  useEffect(() => {
    document.getElementById('q').value = q;
  }, [q]);

  return (
    <div id="shop-page">
      <div>
        <Form id="search-form" role="search">
          <input
            id="q"
            type="search"
            aria-label="search products"
            placeholder="Search"
            name="q"
            defaultValue={q}
            onChange={(e) => {
              const isFirstSearch = q == null;
              submit(e.currentTarget.form, {
                replace: !isFirstSearch,
              });
            }}
          />
          <select
            name="category"
            id="category"
            defaultValue={''}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {titleCase(category)}
              </option>
            ))}
          </select>
        </Form>
      </div>
      <div id="cards-container">
        {products.map((product) => (
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
