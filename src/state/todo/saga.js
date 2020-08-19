import {FETCH_TODOS, setTodosAction, showLoadingAction} from "./actions";
import {call, put, takeEvery} from "@redux-saga/core/effects";

const fetchTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* workerFetchTodos() {
    yield put(showLoadingAction(true));
    const data = yield call(fetchTodos);
    yield delay(2000);
    yield put(setTodosAction(data));
    yield put(showLoadingAction(false));
}

export function* watchFetchTodos() {
    yield takeEvery(FETCH_TODOS, workerFetchTodos);
}