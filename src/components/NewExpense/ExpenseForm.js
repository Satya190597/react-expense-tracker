/**
 * ExpenseForm component - manages form input logic.
 */

// + Import CSS
import styles from "./ExpenseForm.module.css";

// + Default Imports
import React, { useState } from "react";

function ExpenseForm(props) {
  // Initialize expense data.
  const [expenseData, setExpenseData] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });
  // Initialize form visible state.
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Input Handler - Set expense data from user input.
  const inputChangeHandler = (event) => {
    setExpenseData((previousState) => {
      return {
        ...previousState,
        // we need square brackets to tell that this refers to dynamic key name.
        [event.target.name]: event.target.value,
      };
    });
  };

  // Form submission handler.
  const submitHandler = (event) => {
    // 1. Stop normal html form submission behaviour.
    event.preventDefault();

    const expense = {
      id: Math.random().toString(),
      title: expenseData.expenseTitle,
      amount: +expenseData.expenseAmount,
      date: new Date(expenseData.expenseDate),
    };

    // 2. Call addNewExpense method in App.js.
    props.addNewExpense(expense);

    // 3. Clear form inputs.
    setExpenseData((previousState) => {
      return {
        ...previousState,
        expenseTitle: "",
        expenseAmount: "",
        expenseDate: "",
      };
    });

    // 4. Hide add new expense form.
    toggleFormHandler();
  };

  // Toggle add new expense form.
  const toggleFormHandler = () => {
    setIsFormVisible((previousState) => {
      return !previousState;
    });
  };

  const addNewExpenseForm = (
    <form className={styles['new-expense__controls']} onSubmit={submitHandler}>
      <div className={styles['new-expense__control']}>
        <label>Title</label>
        <input
          type="text"
          value={expenseData.expenseTitle}
          name="expenseTitle"
          onChange={inputChangeHandler}
        />
      </div>
      <div className={styles['new-expense__control']}>
        <label>Amount</label>
        <input
          type="number"
          min="0"
          step="0.1"
          value={expenseData.expenseAmount}
          name="expenseAmount"
          onChange={inputChangeHandler}
        />
      </div>
      <div className={styles['new-expense__control']}>
        <label>Date</label>
        <input
          type="date"
          min="2020-01-01"
          max="2050-01-01"
          value={expenseData.expenseDate}
          name="expenseDate"
          onChange={inputChangeHandler}
        />
      </div>
      <div className={styles['new-expense__actions']}>
        <button onClick={toggleFormHandler} type="button">Cancel</button>
        <button>Add</button>
      </div>
    </form>
  );

  return (
    <div>
      {isFormVisible ? (
        addNewExpenseForm
      ) : (
        <button onClick={toggleFormHandler}>Add new Expense</button>
      )}
    </div>
  );
}

export default ExpenseForm;
