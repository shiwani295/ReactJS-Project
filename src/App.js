import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import Props from "./components/Props";
import ExpenseDetail from "./components/Expense/ExpenseDetail";
function App() {
  // single item props in propstask8.js
  const LocationOfExpenditure = "IT";
  const arr = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
  ];

  return (
    <div className="App">
      <ExpenseItem />
      <Expenses />
      {/* send all data in Props.js through arr or single data using props */}
      <Props locationexpenditure={LocationOfExpenditure} MultipleData={arr} />
      <ExpenseDetail />
    </div>
  );
}

export default App;
