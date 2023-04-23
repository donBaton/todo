import {ADD_TODO, COMPLETE_TODO, DELETE_TODO, FETCH_TODOS, SAVE_TODOS, UPDATE_TODO} from "./types";

const initialState = {
    todos: []
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case COMPLETE_TODO:
            return {...state, todos: state.todos.map(todo => ({
                    ...todo,
                    isCompleted: todo.id === action.id ? !todo.isCompleted : todo.isCompleted
                }))}
        case UPDATE_TODO:
            return {...state, todos: state.todos.map(todo => ({
                    ...todo,
                    title: todo.id === action.id ? action.title : todo.title
                }))}
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
        case FETCH_TODOS:
            return {...state, todos: JSON.parse(action.payload)}
        case SAVE_TODOS:

        default:
            return state
    }
}