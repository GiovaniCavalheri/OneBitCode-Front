import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import Products from "../screens/Produts";
import Cart from "../screens/Cart";
import AdminHome from "../screens/admin/AdminHome";
import "./App.css";
import RootLayout from "../screens/RootLayout";
import Product from "../screens/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ 
      index: true,
      element: <Home />
    },{
        path: "products",
        element: <Products />,
      }, {
        path: "products/:productId",
        element: <Product />
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
]);

export default router;
