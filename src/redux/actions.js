import {
    ADD_TODO,
    COMPLETE_TODO,
    DELETE_TODO,
    FETCH_TODOS,
    HIDE_LOADER,
    SAVE_TODOS,
    SHOW_LOADER,
    UPDATE_TODO
} from "./types";
import Repo from "../repo/Repo";

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

export function fetchTodos() {
    return async (dispatch) => {
        dispatch(showLoader())
        let json = await Repo.get('todos')
        dispatch({type: FETCH_TODOS, payload: JSON.stringify(json)})
        dispatch(hideLoader())
    }
}

export function saveTodos(todos) {
    return async (dispatch) => {
        dispatch(showLoader())
        await Repo.set('todos', todos)
        dispatch(hideLoader())
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}