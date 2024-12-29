import './styles/theme.css';
import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cart } from './views/Cart/Cart.jsx';
import { Favourites } from './views/Favourites/Favourites.jsx';
import { Layout } from './components/Layout/Layout.jsx';
import { MainPage } from './views/MainPage/MainPage.jsx';
import { ProductsList } from './views/ProductsList/ProductsList.jsx';
import { mainPageLoader } from './api/mainPageLoader.js';
import { productListLoader } from './api/productListLoader.js';
import { addProductToFavourites } from './api/addProductToFavouritesAction.js';
const router = createBrowserRouter([
  {
    path: '/add-to-favourites/:productId',
    action: addProductToFavourites,
  },
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/koszyk',
        element: <Cart />,
      },
      {
        path: '/ulubione',
        element: <Favourites />,
      },
      {
        path: '/:gender?',
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: '/:gender/:category/:subcategory?',
        element: <ProductsList />,
        loader: productListLoader,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
