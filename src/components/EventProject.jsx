import React, { useState } from "react";

const EventProject = () => {
  const purple = "yellow";
  const [bgcolor, setbgColor] = useState(purple);
  const [name, setName] = useState("Click Me");
  const [symbol, setSymbol] = useState("");

  const bgChange = () => {
    let newBg = "red";
    setbgColor(newBg);

    let newName = "Hurray";
    setName(newName);
  };
  const bgbag = () => {
    let newSymbol = "😄";
    setSymbol(newSymbol);
  };
  return (
    <>
      <div style={{ backgroundColor: bgcolor }}>
        <button onClick={bgChange} onDoubleClick={bgbag} onMouse={bgbag}>
          {name}
          {symbol}
        </button>
      </div>
    </>
  );
};
export default EventProject;
