// + Import components.
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// + Import defaults.
import React, { useState } from "react";

function App() {
  // + Expenses data.
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // Initialize expenses data.
  const [expensesList, setExpensesList] = useState(expenses);

  // Add new expense to expensesList.
  const addNewExpense = (newExpense) => {
    setExpensesList((previousState) => {      
      return [newExpense,...previousState,];
    });
  };

  return (
    <div>
      <div>        
        <NewExpense addNewExpense={addNewExpense} />
        <Expenses expenses={expensesList} />
      </div>
    </div>
  );
}

export default App;
