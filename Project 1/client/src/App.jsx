import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Service from "./Components/Service";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
