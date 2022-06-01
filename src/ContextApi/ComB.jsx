import React, { useContext } from "react";
import ComC from "./ComC";

import { FirstName, LastName } from "./Final";

const ComB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <div>
      <h1>
        Startning {fname}
        {lname}
      </h1>
    </div>
  );
};

export default ComB;
