import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="cardDiv">
      {props.item} <span>Rs {props.price} </span>
    </div>
  );
}

export default Card;
