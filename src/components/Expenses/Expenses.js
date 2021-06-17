// + CSS Imports.
import "./Expenses.css";

// + Component Imports.
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  // + Expense filter handler.
  const filterHandler = (event) => {
    console.log("Year Selected " + event.target.value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter filterHandler={filterHandler} />
      {
        // Show list of expense item from prop.
        props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </Card>
  );
}

export default Expenses;
