import React, { useState } from "react";
import "./ExpenseForm.css";

//using a single state in which pass and object of variables and use spread operator 

/*
 const [exepenseValue, setExpenseValue] = useState({
   expenseTitle: '',
   expenseAmount: '',
   expenseDate: ''
 });


 const eventHandler = (event) => {
   setExpenseValue(
     ...expenseValue,                      <--- key value pairs of previous state
     expenseAmount: {event.target.value}
   )
 }

                   OR
                   
 const eventHandler = (event) =>{
   setExpenseValue((prevState)=>{
     return {                              <----- prefered method
       ...prevState,
       expenseAmount: {value}
     }
   })
 }

*/

const ExpenseForm = (prop) => {
  const [expenseTitle, setExpenseTitle] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')
  const [expenseDate, setExpenseDate] = useState('')


  const expenseTitleHandler = (event) =>{
    setExpenseTitle(event.target.value)
    //console.log(expenseTitle)
  }
  const expenseAmountHandler = (event) =>{
    setExpenseAmount(event.target.value)
    //console.log(expenseAmount)
  }
  const expenseDateHandler = (event) =>{
    setExpenseDate(event.target.value)
    //console.log(expenseDate)
  }
 

  const submitHandler = (event) => {
    event.preventDefault();

    const expense = {
      title: expenseTitle,
      amount: expenseAmount,
      date: expenseDate
    };


    prop.savedExpenseData(expense);

    setExpenseTitle('')
    setExpenseAmount('')
    setExpenseDate('')

  }

  return (
    <form onSubmit = {submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"  value = {expenseTitle}  onChange={expenseTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value = {expenseAmount}
            onChange = {expenseAmountHandler}

          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value = {expenseDate} onChange = {expenseDateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
