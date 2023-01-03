//React create element
import React from "react";

function ExpanseDate(props) {
  const dateexp = props.date.toString();
  //using thids React Older Method
  return React.createElement(
    "div",
    { className: "expense-item" },
    "Hello World",
    React.createElement(
      "div",
      {},
      dateexp,
      React.createElement("h1", {}, "Expense1"),
      React.createElement("h1", {}, "Expense1")
    )
  );

  // return (
  //   <div className="expense_item">
  //     <div>
  //       {dateexp}
  //       <h1>Expense1</h1>
  //       <h1>Expense1</h1>
  //     </div>
  //   </div>
  // );
}

export default ExpanseDate;
