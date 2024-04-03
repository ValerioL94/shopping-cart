/* eslint-disable react/prop-types */
import '../styles/cart.css';
// import PropTypes from 'prop-types';

function Cart({ cart, setCart }) {
  return (
    <div id="cart-page">
      <h1>Your cart </h1>
      <div id="cart-products">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="product">
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
              <h2>{item.quantity}</h2>
            </div>
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  );
}

// Cart.propTypes = {
//   cart: PropTypes.object,
//   setCart: PropTypes.object,
// };

export default Cart;
