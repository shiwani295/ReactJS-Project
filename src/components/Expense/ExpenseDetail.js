import React from "react";
import ExpenseDate from "./ExpenseDate";
//parent send it on child (ExpenseData.js)
const ExpenseDetail = () => {
  const date = new Date();
  const title = "Expenses";
  const amount = 50000;
  return (
    <>
      <div className="expense-item">
        <ExpenseDate Date={date.toString()} Title={title} Amount={amount} />
      </div>
    </>
  );
};
export default ExpenseDetail;
