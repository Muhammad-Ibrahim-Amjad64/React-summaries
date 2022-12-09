import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {

  const [title,setTitle] = useState('')
  const [date,setdate] = useState('')
  const [amount,setAmount] = useState('')






  const titleInputHandler = event=>{
    setTitle(event.target.value)
    console.log(title);
  }
  const dateInputHandler = event=>{
    setdate(event.target.value)
    console.log(date);
  }
  const amountInputHandler = event=>{
    setAmount(event.target.value)
    console.log(amount);
  }

  const formSubmitHandler = (event)=>{
    event.preventDefault();

    const NewExpensedata = {
      title:title,
      amount:+amount,  // converting it into integer
      date: new Date(date),
    }

    
    props.NewExpensedata(NewExpensedata);
    setTitle('')
    setdate('')
    setAmount('')
                     

  }




  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input value={title} type="text" onChange={titleInputHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input  value={amount} type="number" id="amount" min={0.01} step={0.01} onChange={amountInputHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input  value={date} type="date" min="2019-01-01" max="2022-12-31" onChange={dateInputHandler}/>
        </div>
      </div> 
      <div className="new-expense__actions">
        <button type="submit"> <b>Add Expense</b></button>
        <button type="button" onClick={props.formCancel}> <b>Cancel</b></button>
      </div>
    </form>
  );
};

export default ExpenseForm;
