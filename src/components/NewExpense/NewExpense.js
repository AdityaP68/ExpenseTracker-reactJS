import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


const NewExpense = (props) =>{
    //callback function pointed by the prop that accepts an argument form the child component 
    const savedExpenseDataHandler = (enteredExpenseData) =>{
        const savedData = {
            ...enteredExpenseData,
            _id: Math.random().toString()
        }
        props.newExpense(savedData);
    }
    //user defined prop named savedExpensedata that points to a function
    //when passed to the child comp. it gets the access to this handler function
    return (
        <div className = "new-expense">
            <ExpenseForm savedExpenseData = {savedExpenseDataHandler}/>
        </div>
    );
} 

export default NewExpense;