import React from 'react';
import {connect} from "react-redux";
import {completeTodo} from "../../redux/actions";

const Check = (props) => {
    const handleChange = () => {
        props.completeTodo(props.id)
    }

    return (
        <div>
            <input className="form-check-input" type="checkbox" onChange={handleChange} checked={props.isCompleted}/>
            <div className='w-25 h-25 border-3'/>
        </div>
    );
}
const mapDispatchToProps = {
    completeTodo
}

export default connect(null, mapDispatchToProps)(Check)