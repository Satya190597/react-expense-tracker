// + Import CSS.
import "./NewExpense.css";

// + Import components.
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  return (
    <div className="new-expense">
      <ExpenseForm addNewExpense={props.addNewExpense} />
    </div>
  );
}

export default NewExpense;
