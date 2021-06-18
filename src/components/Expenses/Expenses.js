// + CSS Imports.
import "./Expenses.css";

// + Default Imports.
import React, { useState } from "react";

// + Component Imports.
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  // + Expense year.
  const [filterYear, setFilterYear] = useState("2020");

  // + Expense filter handler.
  const filterHandler = (event) => {
   setFilterYear(event.target.value)
  };

  // + Filter Expenses.
  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterHandler={filterHandler}
        filterExpenses={filterHandler}
      />
      {
        // Show list of expense item from prop.
        filterExpenses.map((expense, index) => (
          <ExpenseItem
            key={index}
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
