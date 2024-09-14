import { useState } from "react";
import HomeContent from "./Components/HomeContent";
import Home from "./Components/Home";
import Login from "./Components/Forms/Login";
import Register from "./Components/Forms/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDashboard from "./Components/Dashboard/ProductDashboard";

function App() {
  const [count, setCount] = useState(0);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path:"/",
          element:<HomeContent />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path:"/dashboard",
          element:<ProductDashboard/>,
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
