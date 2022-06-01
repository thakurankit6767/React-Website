import React, { useState } from "react";
import TodoCom from "./TodoCom";

const Todo = () => {
  const [inputlist, setInputList] = useState();

  const [items, setItems] = useState([]);

  const itemevents = (event) => {
    setInputList(event.target.value);
  };

  const deleteItems = (id) => {
    console.log("deletd");

    setItems((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const listOfitems = () => {
    setItems((olditems) => {
      return [...olditems, inputlist];
    });
    setInputList("");
  };
  return (
    <>
      <div>
        <div>
          <br />
          <h1>To do list</h1>
          <br />
          <input
            type="text"
            placeholder="add a item"
            onChange={itemevents}
            value={inputlist}
          />
          <button onClick={listOfitems}>+</button>

          <ol>
            {items.map((itemval, index) => {
              return (
                <TodoCom
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;
