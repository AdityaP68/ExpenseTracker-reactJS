import React from "react";
//import ExpenseItem from "./components/Expense/ExpenseItem";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expense/Expense";
import ExpenseFilter from "./components/NewExpense/ExpenseFilter";

function Hello() {
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

  const newExpenseHandler = expense =>{
    console.log('In App.js');
    console.log(expense)
  }

  const selectedYearHandler = (date) =>{
    console.log(date);
  }
  //passing the object array to the Expense component that will be utilized as props data
  return (
    <div className="app-div">
      <NewExpense newExpense = {newExpenseHandler}/>
      <ExpenseFilter selectedYear = {selectedYearHandler}/>
      <Expense items = {expenses}/>
      
    </div>
  );
}

export default Hello;
