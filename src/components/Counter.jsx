import React from 'react';
import {connect} from 'react-redux'
const Counter = (todos) => {
    return (
        <div className="row">
            <div className="text-end">{todos.todos.length} task{todos.length===1?'':"s"} in total</div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        todos: state.todos.todos
    }
}
export default connect(mapStateToProps, null)(Counter)

