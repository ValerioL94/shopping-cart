import { useLoaderData } from 'react-router-dom';
import '../styles/cart.css';

export default function Cart() {
  const { cart } = useLoaderData();

  return (
    <div id="cart-page">
      <h1>Your cart </h1>
      <div id="cart-products">{cart ? '' : <p>Cart is empty</p>}</div>
    </div>
  );
}
