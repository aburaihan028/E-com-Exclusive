import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
