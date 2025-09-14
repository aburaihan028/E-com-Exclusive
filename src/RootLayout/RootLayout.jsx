import React from "react";
import { Outlet } from "react-router";
import Header from "./Navbar/Header";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
