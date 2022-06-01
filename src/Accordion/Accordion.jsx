import React, { useState } from "react";
import { questions } from "./api";
import Myaccordion from "./Myaccordion";

const Accordion = () => {
  const [data, setData] = useState(questions);
  // console.log(questions)

  return (
    <>
      <div>
        <section>
          <h1>react interview question</h1>
          {data.map((curElem) => {
            const { id, question, answer } = curElem;
            return <Myaccordion key={id} {...curElem} />;
          })}
        </section>
      </div>
    </>
  );
};

export default Accordion;
