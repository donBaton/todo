import React from 'react';
import TodoItem from "./item/TodoItem";
import { connect } from 'react-redux'
import Loader from "./Loader";

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
                {props.isLoading?<Loader />:getSortToDos()}
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        todos: state.todos.todos,
        isLoading: state.loader.isLoading,
    }
}
export default connect(mapStateToProps, null)(TodoList)