import React from "react";

const ExpenseDate = (props) => {
  return (
    <div>
      <p>Date - {props.Date}</p>
      <p>Amount - {props.Amount}</p>
    </div>
  );
};

export default ExpenseDate;
