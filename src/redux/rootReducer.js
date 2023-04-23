import {combineReducers} from "redux";
import {todoReducer} from "./todoReducer";
import {loaderReducer} from "./loaderReducer";

export const rootReducer = combineReducers( {
    todos: todoReducer,
    loader: loaderReducer
})