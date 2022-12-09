
import React from "react"

const UserItem = props =>{
    let number = "places"
    if (props.places===1) {
        number="place"
    }

    return(
     
        <li  className="user-item">
            <div className="user-item__content">
                <div className="user-item__image">
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.places} {number}</h3>

                </div>
            </div>
        </li>
    )
}

export default UserItem
