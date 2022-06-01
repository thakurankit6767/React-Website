import React from "react";

const SlotM = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_iner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>this is matching</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_iner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>this is not matching</h1>
          <hr />
        </div>
      </>
    );
  }
};
const Slotmachine = () => {
  return (
    <>
      <h1 className="heading_style">welcome to slot machine</h1>
      <div>
        <SlotM x="😄" y="😄" z="😄" />
        <SlotM x="😄" y="🍎" z="😄" />
        <SlotM x="😄" y="😄" z="😄" />
      </div>
    </>
  );
};

export default Slotmachine;
