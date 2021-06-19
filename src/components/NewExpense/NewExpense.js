// + Import CSS.
import styles from "./NewExpense.module.css";

// + Import components.
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  return (
    <div className={styles["new-expense"]}>
      <ExpenseForm addNewExpense={props.addNewExpense} />
    </div>
  );
}

export default NewExpense;
