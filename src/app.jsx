import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/error-page.jsx';
import Root from './routes/root.jsx';
import Home from './routes/home.jsx';
import Shop from './routes/shop.jsx';
import Cart from './routes/cart.jsx';
import { productsLoader, productLoader } from './loader.jsx';
import Product from './routes/product.jsx';
import { useState } from 'react';

export default function App() {
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root cart={cart} />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Home /> },
            {
              path: 'shop',
              element: <Shop />,
              loader: productsLoader,
            },
            {
              path: 'shop/:productId',
              element: <Product cart={cart} setCart={setCart} />,
              loader: productLoader,
            },
            {
              path: 'cart',
              element: <Cart cart={cart} setCart={setCart} />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
