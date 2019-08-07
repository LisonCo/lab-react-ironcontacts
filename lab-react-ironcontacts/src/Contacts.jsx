import React from 'react';
import './Contacts.css'

function contacts(props){
    return (
        <div className="contacts">
            <img src={props.picture} alt="people"/>
            <p>{props.name}</p>
            <p>{props.popularity}</p>
            <button onClick={() => {props.removeContact(props.index)}}>Remove</button>
        </div>
    )
}

export default contacts 
