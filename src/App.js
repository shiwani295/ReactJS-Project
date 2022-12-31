import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  return (
    <div className="App">
      {<ExpenseItem />}
      {<Expenses />}
    </div>
  );
}

export default App;
