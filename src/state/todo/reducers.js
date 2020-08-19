import {ADD_TODO, REMOVE_TODO, SET_TODOS, SHOW_LOADING} from "./actions";

const initialState = {
    todos: [],
    loading: true
};

export const todoReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat([payload])
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(value => value.id !== payload.id)
            };
        case SHOW_LOADING:
            return {
                ...state,
                loading: payload
            };
        case SET_TODOS:
            return {
                ...state,
                todos: payload
            };
        default:
            return state;
    }
};