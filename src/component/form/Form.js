import React from "react";
import './Form.scss'
import {useDispatch, useSelector} from "react-redux";
import {updateTextAction} from "../../state/form/actions";
import {addTodosAction} from "../../state/todo/actions";
import {Todo} from "../../model/todo";

const Form = () => {

    const state = useSelector(state => state.form);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const value = state.text.trim();
        if(value) {
            dispatch(addTodosAction(new Todo(value, false)));
            dispatch(updateTextAction(''));
        }
    }

    function handleChange(e) {
        dispatch(updateTextAction(e.target.value));
    }

    return <form className='form' onSubmit={handleSubmit}>
        <input className='form'
               type="text"
               value={state.text}
               placeholder='Enter new task'
               onChange={handleChange}/>

        <input
            value='Create task'
            className='button form'
            type="submit"/>
    </form>
};

export default Form