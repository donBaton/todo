import React from 'react';
import ToDoItem from "./item/ToDoItem";
import Storage from '../repo/Storage'

const ToDoList = () => {
    const getSortToDos = () => {
        return Storage.get('todos')?.sort((a, b) => (b.id - a.id)).map((item) => (
            <ToDoItem todo={item} key={item.id}/>
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

export default ToDoList