import React, { useState } from "react";
import { questions } from "./api";

const Myaccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div style={{ display: "flex" }}>
        <p onClick={() => setShow(!show)}>{show ? "-" : "+"}</p>
        <h3>{question}</h3>
      </div>
      {show && <p>{answer}</p>}
    </>
  );
};

export default Myaccordion;
