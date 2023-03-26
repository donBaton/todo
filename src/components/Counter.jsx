import React from 'react';

const Counter = (props) => {
    return (
        <div className="row">
            <div className="text-end">{props.todos.length} task{props.todos.length===1?'':"s"} in total</div>
        </div>
    );
}

export default Counter