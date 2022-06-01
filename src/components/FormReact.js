import React, { useState } from "react";

const FormReact = () => {
  const [name, setName] = useState("");
  const [fullname, setFullname] = useState();

  const inputevent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const Submit = () => {
    setFullname(name);
  };

  return (
    <>
      <div>
        <h1>hello {fullname} </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          defaultValue=""
          onChange={inputevent}
          value={name}
        />
        <button onClick={Submit}>Click Me</button>
      </div>
    </>
  );
};
export default FormReact;
