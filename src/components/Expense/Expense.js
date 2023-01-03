import React from "react";
//how to send dynamic data not static
function Expense() {
  const expenseDate = new Date(2022, 11, 25);
  const expenseTitle = "car Insurance";
  const expenseAmount = 5000;
  const LocationOfExpenditure = "Automobiles";
  return (
    <div style={{ backgroundColor: "green" }}>
      <div className="food-item">
        <div>{expenseDate.toISOString()}</div>
        <h2> {expenseTitle}</h2>
        <div>{expenseAmount}</div>
      </div>
      <div className="location">
        <h2>{LocationOfExpenditure}</h2>
      </div>
      <div></div>
    </div>
  );
}

export default Expense;
