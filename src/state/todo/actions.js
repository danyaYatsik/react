export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';
export const SHOW_LOADING = 'SHOW_LOADING';
export const SET_TODOS = 'SET_TODOS';

export const removeTodoAction = (todo) => ({
    type: REMOVE_TODO,
    payload: todo
});

export const addTodosAction = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const setTodosAction = (todos) => ({
   type: SET_TODOS,
   payload: todos
});

export const showLoadingAction = (loading) => ({
    type: SHOW_LOADING,
    payload: loading
});

//saga
export const fetchTodosAction = () => ({
    type: FETCH_TODOS
});
