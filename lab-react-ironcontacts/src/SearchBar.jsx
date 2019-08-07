import React from 'react';

function searchBar(props){
    return (
        <div>
            <input type="text" className="input" placeholder="Search..." onChange={props.searchContact} />
        </div>
    )
}

export default searchBar