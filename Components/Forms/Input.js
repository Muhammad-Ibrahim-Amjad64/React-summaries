
import React from "react"
import classes from './Input.module.css';


const Input  = props =>{

    return(
     <>
        <div
        className={`${classes.control} ${
           props.isValid=== false ? classes.invalid : ''
        }`}
        >
        <label htmlFor={props.id}>{props.label}</label>
        <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
          
        />
      </div>

          </>
    )
}

export default Input 

// Ye ye props dainay hn gy      
// <Input
// label="E-mail"
// type="email"
// id="email"
// isValid={isValidEmail}
// value={EmailState.value}
// onChange={emailChangeHandler}
// onBlur={validateEmailHandler}
// />