import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Count = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = (value) => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Zero Limit Reached");
      setCount(0);
    }
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <div style={{ display: "flex" }}>
          <AddCircleOutlineIcon onClick={Increment} />
          <button onClick={Decrement}>Dec</button>
        </div>
      </div>
    </>
  );
};

export default Count;
