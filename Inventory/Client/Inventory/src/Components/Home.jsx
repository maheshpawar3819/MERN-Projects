import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import HomeContent from "./HomeContent";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
