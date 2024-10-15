import AddCategory from "./Components/Category/AddCategory";
import Category from "./Components/Category/Category";
import EditCategory from "./Components/Category/EditCategory";
import Loginform from "./Components/login/Loginform";
import AddSubCategory from "./Components/SubCategory/AddSubCategory";
import EditSubCategory from "./Components/SubCategory/EditSubCategory";
import SubCategory from "./Components/SubCategory/SubCategory";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./Components/Product/Product";
import AddProduct from "./Components/Product/AddProduct";
import EditProduct from "./Components/Product/EditProduct";
import Register from "./Components/login/Register";
import Layout from "./Components/NavBar/Layout";
import Sidebar from "./Components/NavBar/Sidebar";
import PrivateRoute from "./PrivateRoute";

function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Loginform />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <Layout />, // Layout with Navbar
      children: [
        {
          path: "category",
          element: (
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          ),
        },
        {
          path: "category/add",
          element: (
            <PrivateRoute>
              <AddCategory />
            </PrivateRoute>
          ),
        },
        {
          path: "category/:id",
          element: (
            <PrivateRoute>
              <EditCategory />
            </PrivateRoute>
          ),
        },
        {
          path: "subcategory",
          element: (
            <PrivateRoute>
              <SubCategory />
            </PrivateRoute>
          ),
        },
        {
          path: "subcategory/add",
          element: (
            <PrivateRoute>
              <AddSubCategory />
            </PrivateRoute>
          ),
        },
        {
          path: "subcategory/:id",
          element: (
            <PrivateRoute>
              <EditSubCategory />
            </PrivateRoute>
          ),
        },
        {
          path: "product",
          element: (
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          ),
        },
        {
          path: "product/add",
          element: (
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          ),
        },
        {
          path: "product/:id",
          element: (
            <PrivateRoute>
              <EditProduct />``
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/sidebar",
      element: <Sidebar />,
    },
  ]);

  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
