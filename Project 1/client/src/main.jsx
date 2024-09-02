import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthPorvider } from "./store/auth.jsx";

createRoot(document.getElementById("root")).render(
  <AuthPorvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthPorvider>
);
