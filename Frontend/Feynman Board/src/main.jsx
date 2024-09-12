import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LandingPage from "./Component/LandinPage.jsx";
import Dashboard from "./Component/Dashboard.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<LandingPage/>,
      },
      {
        path: "/dashboard",
        element:<Dashboard/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
