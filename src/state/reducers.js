import {combineReducers} from "redux";
import {formReducer} from "./form/reducers";
import {todoReducer} from "./todo/reducers";

export default combineReducers({
    form: formReducer,
    todos: todoReducer
});