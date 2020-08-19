import {UPDATE_TEXT} from "./actions";

const initialState = {
    text: ''
};

export function formReducer(state = initialState, {type, payload}) {
    switch (type) {
        case UPDATE_TEXT:
            return {...state, text: payload};
        default:
            return state;
    }
}