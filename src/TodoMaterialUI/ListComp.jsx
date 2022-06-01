import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ListComp = (props) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <span onClick={cutIt}>
          <DeleteIcon />
        </span>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>
    </>
  );
};

export default ListComp;
