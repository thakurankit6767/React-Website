import React, { useState } from "react";

const GetTime = () => {
  let gtime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(gtime);

  const Utime = () => {
     gtime = new Date().toLocaleTimeString();
    setTime(gtime);
  };

  return (
    <>
      <div>
        <h1>{time}</h1>
        <button onClick={Utime}>Get Time</button>
      </div>
    </>
  );
};
export default GetTime;
