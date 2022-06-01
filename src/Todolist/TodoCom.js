import React from "react";

const TodoCom = (props) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          delete
        </button>
        <li> {props.text}</li>;
      </div>
    </>
  );
};

export default TodoCom;
