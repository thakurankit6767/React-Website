import React from "react";
import { FirstName ,LastName } from "./Final";
const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
             <LastName.Consumer>
                 {(lname)=>{
                     return(
                       <h1>Startning {fname}{lname}</h1>
          );
                 }}
             </LastName.Consumer>
          );
          
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;
