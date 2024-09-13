import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Forms/Login";
import Register from "./Components/Forms/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
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
