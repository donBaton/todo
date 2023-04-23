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
// export function fetchTodos() {
//     return async dispatch => {
//         const response = await Repo.get('todos')
//         const json = response.json()
//         dispatch({ type: FETCH_TODOS, payload: json})
//     }
// }

export function fetchTodos() {
    return async (dispatch) => {
        let json = await Repo.get('todos')
        json = JSON.stringify(json)
        console.log(`!!! ${json}`)
        dispatch({type: FETCH_TODOS, payload: json})
    }
}

export function saveTodos() {
    return {
        type: SAVE_TODOS,
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