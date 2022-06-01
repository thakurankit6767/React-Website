import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import NavbarW from "./NavbarW";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";


const WebAllRoutes = () => {
  return (
    <div>
      <NavbarW />
      <Routes>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/services" element={<Service />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default WebAllRoutes;
