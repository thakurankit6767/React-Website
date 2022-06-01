import React from "react";
import Common from "./Common";

const About = (props) => {
  const img =
    "https://cdn.pixabay.com/photo/2017/08/06/06/18/laptop-2589420__340.jpg";
  return (
    <>
      <div>
        <Common
          name="Welcome to About Page"
          imgsrc={img}
          visit="/contact"
          btname="Contact Now"
        />
      </div>
    </>
  );
};

export default About;
