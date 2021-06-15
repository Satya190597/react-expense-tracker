// + CSS Imports.
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // + Convert standard date to month day and year format.
  const months = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{months}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">{props.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
