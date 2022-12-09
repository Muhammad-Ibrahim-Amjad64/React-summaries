
import React from "react"
import "./Card.css"

const Card = props =>{
    const classes = `card ${props.className}`
    // const classes = ("card" + props.className);

    return(
     
        <div className={classes}>
        {/* <div className={`card ${props.className}`}> */}
            {props.children}
        </div>
    )
}

export default Card