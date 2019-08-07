import React from 'react';

function sortButton(props){
    return (
        <div>
            <button onClick={props.sort}>Sort by popularity</button>
        </div>
    )
}

export default sortButton