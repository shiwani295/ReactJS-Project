import React from "react";
function Props(props) {
  return (
    <>
      <div>Location Of Expenditure - {props.locationexpenditure}</div>
      {props.MultipleData.map((item) => {
        console.log(item);

        return (
          <>
            <div>{item.title}</div>
            <div>{item.id}</div>
          </>
        );
      })}

      <div> </div>
    </>
  );
}

export default Props;
