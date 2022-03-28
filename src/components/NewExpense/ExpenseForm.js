import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [titleValue, titleState] = useState("");
  const [amountValue, amountState] = useState("");
  const [dateValue, dateState] = useState("");

  const titleHandler = (e) => {
    titleState(e.target.value);
    console.log(titleValue);
  };

  const amountHandler = (e) => {
    amountState(e.target.value);
    console.log(amountValue);
  };

  const dateHandler = (e) => {
    dateState(e.target.value);
    console.log(dateValue);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
