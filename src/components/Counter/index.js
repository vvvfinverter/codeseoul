import React from 'react';

const Counter = ({counter, onIncrement, onDecrement}) => {
    return(
        <div>
            <div>current counter : {counter}</div>
            <button onClick={onIncrement}>inc</button>
            <button onClick={onDecrement}>dec</button>
        </div>
    )
}

export default Counter;