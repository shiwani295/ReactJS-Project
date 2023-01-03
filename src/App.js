import React from "react";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import ExpenseDetail from "./components/Expense/ExpenseDetail";
import ExpanseDate from "./components/CreateElement_React/ExpanseDate";
import Expense from "./components/Expense/Expense";
import Props from "./components/Expense/Props";

function App() {
  const LocationOfExpenditure = "IT";
  const expDate = new Date();
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 8, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      <ExpenseItem ExpData={expenses} />
      <h2>Expenses-</h2>
      <ExpenseDetail />
      <hr></hr>
      <h2>Using CreateElement_React</h2>
      <ExpanseDate date={expDate} />
      <hr></hr>
      <h2>This file show how to send dynamic data</h2>
      <Expense />
      <h2>
        Send Props to Props file single and multiple data (like array(expenses))
      </h2>
      <Props
        locationexpenditure={LocationOfExpenditure}
        ArrExpenseData={expenses}
      />
    </div>
  );
}

export default App;

//start react from react old method (49)//11
// return React.createElement(
//   "div",
//   { App },
//   React.createElement(ExpenseItem, { ExpData: expenses })
// );
//end react from react old method (49)//11
