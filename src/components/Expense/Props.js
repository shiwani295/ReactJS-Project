import React from "react";
function Props(props) {
  return (
    <>
      <div>Location Of Expenditure - {props.locationexpenditure}</div>
      {props.ArrExpenseData.map((ExpItem) => {
        return (
          <>
            <div>{ExpItem.title}</div>
            <div>{ExpItem.amount}</div>
          </>
        );
      })}
    </>
  );
}

export default Props;
