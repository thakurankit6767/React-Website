import React from "react";
import { Route, Switch, Routes } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
// import Name from "./Name"
import User from "./User";
import SearchFilter from "./SearchFilter";
import Error from "./Error";

const AllRoute = () => {
  const Name = () => {
    return <h1>hello name</h1>;
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:fname" element={<User />} />
        <Route path="/searchfilter" element={<SearchFilter />} />
        <Route exact path="/contact/Name" element={Name} />
        <Route element={<Error />} />
        {/* <Redirect to="/"  /> */}
      </Routes>
    </>
  );
};

export default AllRoute;
