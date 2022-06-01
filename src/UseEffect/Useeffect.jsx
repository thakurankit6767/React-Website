import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("i am clicked");
    console.log("i am clicked");
  }, [num]);

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click me {num}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setNums(nums - 1);
        }}
      >
        Click me {nums}
      </button>
    </>
  );
};

export default Useeffect;
