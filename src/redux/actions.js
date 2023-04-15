import {ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATE_TODO} from "./types";

export function createTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function completeTodo(id) {
    return {
        type: COMPLETE_TODO,
        id: id
    }
}
export function updateTodo(id, title) {
    return {
        type: UPDATE_TODO,
        id: id,
        title: title
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id: id
    }
}