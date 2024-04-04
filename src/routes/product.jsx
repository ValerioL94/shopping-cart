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
      if (index !== -1) {
        if (parseInt(newCart[index].quantity) + parseInt(quantity) <= 10) {
          newCart[index].quantity =
            parseInt(newCart[index].quantity) + parseInt(quantity);
        } else {
          return alert(
            'You already have 10 units of this product in your cart.'
          );
        }
      } else {
        newCart.push({ ...product, quantity: quantity });
      }
      showNotification();
      setCart(newCart);
    }
  }

  function showNotification() {
    let notification = document.getElementById('tn-box');
    notification.classList.add('tn-box-active');
    setTimeout(() => {
      notification.classList.remove('tn-box-active');
    }, 2100);
  }

  return (
    <div id="product-page">
      <div id="tn-box" className="tn-box-color-1">
        <p>Product/s added to the cart!</p>
        <div className="tn-progress"></div>
      </div>
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
              max={10}
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
