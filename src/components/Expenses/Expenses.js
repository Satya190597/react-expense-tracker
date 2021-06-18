// + CSS Imports.
import "./Expenses.css";

// + Default Imports.
import React, { useState } from "react";

// + Component Imports.
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  // + Initialize Expense year - with 2020.
  const [filterYear, setFilterYear] = useState("2020");

  // + Expense filter handler - Filter by year.
  const filterHandler = (year) => {
    setFilterYear(year);
  };

  // + Filter Expenses.
  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter filterHandler={filterHandler} />
      <ExpensesList expenses={filterExpenses} />
    </Card>
  );
}

export default Expenses;
