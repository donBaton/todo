import {HIDE_LOADER, SHOW_LOADER} from "./types";
const initialState = {
    isLoading: false
}
export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIDE_LOADER:
            return {...state, isLoading: false}
        case SHOW_LOADER:
            return {...state, isLoading: true}
        default:
            return state
    }
}