import React from 'react';

function randomButton(props){
    return (
        <div>
            <button onClick={props.random}>Add a Random Celebrity</button>
        </div>
    )
}

export default randomButton