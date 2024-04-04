/* eslint-disable react/prop-types */
import '../styles/cart.css';
// import PropTypes from 'prop-types';

function Cart({ cart, setCart }) {
  function handleIncrement(item) {
    let newCart = [...cart];
    let index = newCart.findIndex((i) => i.id === item.id);
    if (item.quantity < 99)
      newCart[index].quantity = newCart[index].quantity + 1;
    setCart(newCart);
  }
  function handleDecrement(item) {
    let newCart = [...cart];
    let index = newCart.findIndex((i) => i.id === item.id);
    if (item.quantity > 1)
      newCart[index].quantity = newCart[index].quantity - 1;
    setCart(newCart);
  }
  return (
    <div id="cart-page">
      <h1>Your cart </h1>
      <div id="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
              <h2>Price: ${item.price} </h2>
              <h2>Total: ${Math.floor(item.quantity * item.price)} </h2>

              <div className="item-quantity">
                <button
                  className="btn-increment"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <h2>{item.quantity}</h2>
                <button
                  className="btn-decrement"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => setCart(cart.filter((i) => i.id !== item.id))}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
      <div>
        <h1>Subtotal</h1>
        <h2>
          $
          {cart.reduce(
            (sum, item) => sum + Math.floor(item.price * item.quantity),
            0
          )}{' '}
        </h2>
      </div>
    </div>
  );
}

// Cart.propTypes = {
//   cart: PropTypes.object,
//   setCart: PropTypes.object,
// };

export default Cart;
