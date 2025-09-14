import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import RootLayout from "./RootLayout/RootLayout";
import BreadCrumb from "./Components/CommonComponents/BreadCrumb";
import ProductPage from "./Pages/ProductShop/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/about" element={"fkldsfsd ls ds"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
