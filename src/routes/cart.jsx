import { NavLink } from 'react-router-dom';
import '../styles/cart.css';
import PropTypes from 'prop-types';

function Cart({ cart, setCart }) {
  function handleClick(item, action) {
    let newCart = [...cart];
    let index = newCart.findIndex((i) => i.id === item.id);
    if (action === 'decrement' && item.quantity > 1) {
      newCart[index].quantity = parseInt(newCart[index].quantity) - 1;
    }
    if (action === 'increment' && item.quantity < 10) {
      newCart[index].quantity = parseInt(newCart[index].quantity) + 1;
    }
    setCart(newCart);
  }

  return (
    <div id="cart-page">
      <h1 style={{ fontSize: '2.5rem' }}>Your cart </h1>
      <div id="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <NavLink to={`/shop/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </NavLink>
              </div>
              <div className="item-details">
                <h1>{item.title}</h1>
                <h2>
                  Price:{' '}
                  <span style={{ color: 'green' }}>
                    ${item.price.toFixed(2)}
                  </span>{' '}
                </h2>
                <h2>
                  Total:{' '}
                  <span style={{ color: 'red' }}>
                    ${(item.quantity * item.price).toFixed(2)}{' '}
                  </span>
                </h2>
                <div className="item-quantity">
                  <button
                    className="btn-decrement"
                    onClick={() => handleClick(item, 'decrement')}
                  >
                    -
                  </button>
                  <h2>{item.quantity}</h2>
                  <button
                    className="btn-increment"
                    onClick={() => handleClick(item, 'increment')}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="item-remove"
                onClick={() => setCart(cart.filter((i) => i.id !== item.id))}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p style={{ fontWeight: '600', fontSize: '1.3rem' }}>Cart is empty</p>
        )}
      </div>
      <div id="checkout">
        <h1>Subtotal: </h1>
        <h2 style={{ color: 'red' }}>
          $
          {cart
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2)}
        </h2>
        <button
          onClick={() =>
            cart.length > 0
              ? (alert('Thanks for buying, Bye!'), setCart([]))
              : alert('The cart is empty and this is a fake site so...')
          }
        >
          Checkout &gt;
        </button>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Cart;
