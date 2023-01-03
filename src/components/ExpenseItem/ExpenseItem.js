import "./ExpenseItem.css";
import Card from "./card/Card";
function ExpenseItem(props) {
  return (
    <div className="Parent-div">
      <div className="Add-New-Expense">Add New Expenses</div>
      <br></br>
      {props.ExpData.map((item) => {
        // const Year = item.date.toLocaleDateString("en-US", { year: "numeric" });
        const year = item.date.getFullYear();
        const Month = item.date.toLocaleDateString("en-US", { month: "long" });
        //const month = item.date.getMonth(); //it will give numeric value
        const Day = item.date.toLocaleDateString("en-US", { day: "numeric" });
        return (
          <Card className="Expense-item">
            <div>
              <div className="Expense-date">
                <div className="Item-month">{Month} </div>
                <div className="Item-year">{year} </div>
                <div className="Item-day">{Day} </div>
              </div>
              <h3 className="Expense-Item-title">{item.title}</h3>
              <div className="Expense-Item-amount">{item.amount}</div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
export default ExpenseItem;
