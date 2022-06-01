import React, { createContext } from "react";
import ComA from "./ComA";
const FirstName = createContext();
const LastName = createContext();

const Final = () => {
  return (
    <>
      <FirstName.Provider value={"ASD FDFGH"}>
        <LastName.Provider value={"ZXCV BNMV"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default Final;
export { FirstName ,LastName };
