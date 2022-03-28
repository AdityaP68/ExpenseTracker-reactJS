import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //dynamic placeholders {javascript}
  //pass data from parent node to child node via props
  //eventHandlers are passed as attributes in the JSX element and are of type "on_Eventname" ex - onCLick

  const [title, setTitle] = useState(props.title);
  console.log("This component has been evaluated");

  //let title_ = props.title
  const clickHandler = () => {
    //update like this doesnt happen because the component has to be reevaluated for the change to happen which isnt the case
    setTitle("Updated");
    //title_ = 'updated!';
    console.log(title);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>

      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default ExpenseItem;
