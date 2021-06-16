/**
 * Expense Date Sub Component - To display formatted date.
 */

// + CSS Imports.
import './ExpenseDate.css'

function ExpenseDate(props) {
  // + Convert standard date to month day and year format.
  const months = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{months}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
