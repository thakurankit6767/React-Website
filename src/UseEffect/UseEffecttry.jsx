import React, { useState, useEffect } from "react";

const UseEffecttry = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    // alert("asd");
    document.title = `you are click me ${num} times`;
  });
  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Clicked me{num}
      </button>
    </div>
  );
};

export default UseEffecttry;
