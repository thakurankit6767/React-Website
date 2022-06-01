import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ListComp from "./ListComp";

const Todolistmaterial = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewitem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfitem = () => {
    setNewitem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("")
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToList</h1>
          <br />

          <input type="text" placeholder="Add an items" onChange={itemEvent} value={item} />
          <Button className="new_btn" onClick={listOfitem}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((val,index) => {
              return <ListComp key={index} text={val}/>;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default Todolistmaterial;
