import React from "react";
import "./Card.css";
//here we understand the "chindern " keyword the probs comes from ExpenseItem
function Card(props) {
  const classes = "card " + props.className;
  //console.log(classes); // this we get here card Expense-item
  return <div className={classes}>{props.children}</div>; //{classes}</div>
}

export default Card;
