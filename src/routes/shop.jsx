import '../styles/shop.css';
import { useLoaderData, Form, NavLink, useSubmit } from 'react-router-dom';

export default function Shop() {
  const { products, categories, category, q } = useLoaderData();
  const submit = useSubmit();

  function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

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
            defaultValue={category}
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
              <p className="cardPrice">${product.price.toFixed(2)}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
