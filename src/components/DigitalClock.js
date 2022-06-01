import React, { useState } from "react";

const DigitalClock = () => {
  let ctime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(ctime);

  const upDateTime = () => {
    let ctime = new Date().toLocaleTimeString();
    setTime(ctime);
  };

  setInterval(upDateTime,1000)

  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
};
export default DigitalClock;
