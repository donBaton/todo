import React from 'react';
import TodoItem from "./item/TodoItem";
import { connect } from 'react-redux'

const TodoList = (props) => {
    const getSortToDos = () => {
        return props.todos?.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)}).map((item) => (
            <TodoItem todo={item} key={item.id}/>
        ))
    }

    return (
        <div className="row">
            <div>
                !{props.isLoading}
                {props.length}
                {props.isLoading?'Loading...':getSortToDos()}
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        todos: state.todos.todos,
        loader: state.isLoading,
    }
}
export default connect(mapStateToProps, null)(TodoList)