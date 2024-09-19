import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact/Contact";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Service from "./Components/Service/Service";
import Navbar from "./Components/Navbar/Navbar";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import Logout from "./Components/Logout";
import AdminLayout from "./Components/Layouts/AdminLayout";
import AdminUsers from "./Components/Layouts/AdminUsers";
import AdminContact from "./Components/Layouts/AdminContact";
import AdminUpdate from "./Components/Layouts/AdminUpdate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />

          {/* //Nested Routing */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContact />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
