import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/error-page.jsx';
import Root from './routes/root.jsx';
import Home from './routes/home.jsx';
import Shop from './routes/shop.jsx';
import Cart from './routes/cart.jsx';
import { productsLoader, productLoader } from '../loader.jsx';
import Product from './routes/product.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
            element: <Product />,
            loader: productLoader,
          },
          {
            path: 'cart',
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
