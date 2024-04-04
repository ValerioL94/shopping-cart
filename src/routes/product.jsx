import { Form, useLoaderData } from 'react-router-dom';
import '../styles/product.css';
import PropTypes from 'prop-types';

function Product({ cart, setCart }) {
  const { product } = useLoaderData();

  function getRating(rate) {
    let rounded = Math.floor(rate);
    switch (rounded) {
      case 0 || 1:
        return '★';
      case 2:
        return '★★';
      case 3:
        return '★★★';
      case 4:
        return '★★★★';
      case 5:
        return '★★★★★';
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    let quantity = e.currentTarget.quantity.value;
    if (cart.length === 0) {
      setCart([...cart, { ...product, quantity: quantity }]);
    } else {
      let newCart = [...cart];
      let index = newCart.findIndex((item) => item.id === product.id);
      index !== -1
        ? (newCart[index].quantity =
            parseInt(newCart[index].quantity) + parseInt(quantity))
        : newCart.push({ ...product, quantity: quantity });
      setCart(newCart);
    }
  }

  return (
    <div id="product-page">
      <div id="product">
        <img src={product.image} alt={product.description} />
        <h1 className="title">{product.title}</h1>
        <h2 className="description">{product.description}</h2>
        <div className="details-wrapper">
          <h3 className="rate">
            Rating:
            {
              <span>
                {' '}
                {product.rating.rate} {getRating(product.rating.rate)}
              </span>
            }
          </h3>
          <h3 className="count">
            Reviews: <a href="">{product.rating.count}</a>
          </h3>
          <h3 className="price">
            Price: <span>${product.price}</span>
          </h3>
        </div>
        <div className="form-wrapper">
          <Form onSubmit={handleSubmit}>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min={1}
              max={99}
              defaultValue={1}
            />
            <button type="submit">Add to cart</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Product;
