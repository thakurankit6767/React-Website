import React from "react";

function Morning() {
  let currentDate = new Date(2022, 5, 25, 20);
  currentDate = currentDate.getHours();
  let greeting = "";
  let cssStyle = {};
  if (currentDate >= 1 && currentDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "red";
  } else if (currentDate >= 12 && currentDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "yellow";
  }

  return (
    <div className="App">
      <h1>
        hello Sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  );
}

export default Morning;



