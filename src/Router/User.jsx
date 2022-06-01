import React from "react";
import { useParams, useLocation } from "react-router-dom";

const User = ({}) => {
  const { fname } = useParams();
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>userpage{fname}</h1>
      <p>my current laction {location.pathname}</p>
      {location.pathname === `/user/asd/fgh` ? (
        <button onClick={() => alert("hello")}>click me</button>
      ) : null}
    </div>
  );
};

export default User;
