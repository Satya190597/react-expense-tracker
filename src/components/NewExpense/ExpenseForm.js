/**
 * ExpenseForm component - manages form input logic.
 */

// + Import CSS
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0" step="0.1" />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2020-01-01" max="2050-01-01"/>
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
