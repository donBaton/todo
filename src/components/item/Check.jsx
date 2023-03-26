import React from 'react';

const Check = (props) => {
    const handleChange = () => {
        props.handleIsCompleted(!props.isCompleted)
    }

    return (
        <div>
            <input className="form-check-input" type="checkbox" onChange={handleChange} checked={props.isCompleted}/>
            <div className='w-25 h-25 border-3'/>
        </div>
    );
}

export default Check