import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Layout";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<h2>Loading...</h2>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;