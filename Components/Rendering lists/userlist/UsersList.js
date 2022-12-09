// we can return conditionlly
import React from "react"
import UserItem from "./UserItem"
import "./UserItem.css"

const UsersList = props =>{
    if (props.items.length===0) {
        return (
            <h1>You have no friends yet :( , Want to make new friends</h1>
        )
        
    };

    return(
     
        <div>
            <ul>
                {props.items.map(item=>{
                    return(
                        <UserItem 
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        places={item.places}
                        />
                    )
                    
                })}
            </ul>
        </div>
    )
}

export default UsersList
