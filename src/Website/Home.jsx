import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const img =
  "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__480.jpg";
const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business"
        imgsrc={img}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
