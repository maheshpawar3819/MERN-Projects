import AddCategory from "./Components/Category.jsx/AddCategory";
import Category from "./Components/Category.jsx/Category";
import Loginform from "./Components/login/Loginform";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  ]);

  return (
    <>
      <RouterProvider router={approuter} />
    </>
  );
}

export default App;
