// import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { HomePage } from "../pages/main-page";
import { ProductPage } from "../pages/product-page";
import { CartPage } from "../pages/cart-page";
import { PageNotFound } from "../pages/page-not-found";
import { Layout } from "../shared/layouts/layout";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
);
