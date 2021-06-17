// + CSS Imports.
import "./ExpenseItem.css";

// + Default Imports.
import React, { useState } from "react";

// + Component Imports.
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // 1. Initialize title state.
  const [title, setTitle] = useState(props.title);

  // 2. Update title - click handler.
  const updateTitleHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {
          // Title - OLD CODE
          // <h2>{props.title}</h2>
        }
        <h2>{title}</h2>
        <p className="expense-item__price">{props.amount}</p>
        {
          // Test Objective - Learn state management in react.
        }
        <button onClick={updateTitleHandler}>Update Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
