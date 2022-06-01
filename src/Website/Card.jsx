import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const img =
    "https://cdn.pixabay.com/photo/2018/04/26/16/39/beach-3352363__340.jpg";
  return (
    <>
      <div className="row gy-4">
        <div className="col-md-4 col-10 mx-auto">
          <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt="img" />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="/" className="btn btn-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
