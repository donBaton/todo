import React from 'react';
import Storage from '../../repo/Storage'
const Check = (props) => {
    const handleChange = () => {
        const todos = Storage.get('todos')
        const current = todos.find(t => t.id === props.id )
        current.isCompleted = !current.isCompleted
        Storage.set('todos', todos)
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