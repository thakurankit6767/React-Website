import React from "react";
import Data from "./Data";
// import Images from "./Images";
console.log(Data);

const PropsNetflix = (props) => {
  return (
    <div className="cards">
      <div className="card">
        {/* <Images /> */}
        <img src={props.img} alt="img" className="card_img" />
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card_title">
            <a href={props.link}>
              <button>watch Now</button>
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PropsNetflix;
