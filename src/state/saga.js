import {all} from "@redux-saga/core/effects";
import {watchFetchTodos} from "./todo/saga";


export default function* rootSaga() {
    yield all([
        watchFetchTodos()
    ]);
}