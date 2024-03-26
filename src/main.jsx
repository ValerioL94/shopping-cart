import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../error-page.jsx';
import Root from './routes/root.jsx';
import Home from './routes/home.jsx';
import Shop from './routes/shop.jsx';
import Cart from './routes/cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'shop',
            element: <Shop />,
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
