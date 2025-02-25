import App from '../App/App.jsx';
import { appLoader } from '../App/appActions.jsx';

import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import Home from '../Home/Home.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

import ProductPage from '../ProductPage/ProductPage.jsx';
import { productPageLoader } from '../ProductPage/productPageActions.js';

import ProductDisplay from '../ProductDisplay/ProductDisplay.jsx';
import { productDisplayLoader } from '../ProductDisplay/productDisplayActions.js';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: ':categoryName',
            element: <ProductPage />,
            loader: productPageLoader,
          },
          {
            path: 'product/:productId',
            element: <ProductDisplay />,
            loader: productDisplayLoader,
          },
        ],
      },
    ],
  },
]);

export { router };
