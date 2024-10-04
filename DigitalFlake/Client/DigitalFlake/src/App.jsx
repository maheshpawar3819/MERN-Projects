import AddCategory from "./Components/Category.jsx/AddCategory";
import Category from "./Components/Category.jsx/Category";
import EditCategory from "./Components/Category.jsx/EditCategory";
import Loginform from "./Components/login/Loginform";
import AddSubCategory from "./Components/SubCategory/AddSubCategory";
import EditSubCategory from "./Components/SubCategory/EditSubCategory";
import SubCategory from "./Components/SubCategory/SubCategory";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./Product/Product";
import AddProduct from "./Product/AddProduct";
import EditProduct from "./Product/EditProduct";

function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Loginform />,
    },
    {
      path: "/category",
      element: <Category />,
    },
    {
      path: "/category/add",
      element: <AddCategory />,
    },
    {
      path: "/category/:id",
      element: <EditCategory />,
    },
    {
      path: "/subcategory",
      element: <SubCategory />,
    },
    {
      path: "/subcategory/add",
      element: <AddSubCategory />,
    },
    {
      path: "/subcategory/:id",
      element: <EditSubCategory />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/product/add",
      element: <AddProduct />,
    },
    {
      path: "/product/:id",
      element: <EditProduct />,
    },
  ]);

  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
