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
          element: <Category />,
        },
        {
          path: "category/add",
          element: <AddCategory />,
        },
        {
          path: "category/:id",
          element: <EditCategory />,
        },
        {
          path: "subcategory",
          element: <SubCategory />,
        },
        {
          path: "subcategory/add",
          element: <AddSubCategory />,
        },
        {
          path: "subcategory/:id",
          element: <EditSubCategory />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "product/add",
          element: <AddProduct />,
        },
        {
          path: "product/:id",
          element: <EditProduct />,
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
