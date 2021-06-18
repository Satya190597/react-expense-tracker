// + Import CSS.
import "./ExpensesList.css";
// + Import Components
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <div className="expenses-list__fallback">No Expenses Found</div>;
  } else {
    return props.expenses.map((expense, index) => (
      <div className="expenses-list">
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </div>
    ));
  }
}

export default ExpensesList;
