import React from "react";
import PropsNetflix from "./PropsNetflix";
import Data from "./Data";
console.log(Data);

const Netflix = () => {

    function ncard(val){
return(
    <PropsNetf
          key={val.id}
          img={val.img}
          title={val.title}
          year={val.year}
          link={val.link}
        />
)

    }
return(
  <>
    <h1 className="heading_style">list of top five series</h1>
    {Data.map((val, index) => {
      console.log(index);
      return (
        Data.map(ncard/)
      );
    })}
    ;
  </>
   
)
};

export default Netflix;
