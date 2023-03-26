import React from 'react';
import TodoItem from "./item/TodoItem";

const TodoList = (props) => {
    const getSortToDos = () => {
        return props.todos?.sort((a, b) => (b.id - a.id)).map((item) => (
            <TodoItem todo={item} key={item.date} todos={props.todos} handleTodos={props.handlerTodos}/>
        ))
    }

    return (
        <div className="row">
            <div>
                {getSortToDos()}
            </div>
        </div>
    );
}

export default TodoList