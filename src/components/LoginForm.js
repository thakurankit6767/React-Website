import React, { useState } from "react";

const LoginForm = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
  });

  const inputevent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const { value, name } = event.target;

    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const Submit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };
  return (
    <>
      <div>
        <form onSubmit={Submit}>
          <h1>
            hello {fullName.fname} {fullName.lname}
          </h1>
          <p>{fullName.email}</p>
          <p>{fullName.mobile}</p>
          <input
            type="text"
            placeholder="Enter Your Name"
            defaultValue=""
            name="fname"
            onChange={inputevent}
            value={fullName.fname}
          />

          <input
            type="text"
            placeholder="Enter Your lastname"
            defaultValue=""
            name="lname"
            onChange={inputevent}
            value={fullName.lname}
          />
          <input
            type="text"
            placeholder="Enter Your Email"
            defaultValue=""
            name="email"
            onChange={inputevent}
            value={fullName.email}
          />
          <input
            type="number"
            placeholder="Enter Your PhoneNumber"
            defaultValue=""
            name="mobile"
            onChange={inputevent}
            value={fullName.mobile}
          />
          <button type="submit">Click Me</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
