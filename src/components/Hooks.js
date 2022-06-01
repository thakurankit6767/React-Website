import React, { useState } from "react";

const Hooks = () => {
 const [count , setCount]=useState(0)

  const Inc =()=>{
      setCount(count+1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Inc} >Click Me</button>
    </div>
  );
};

export default Hooks;
