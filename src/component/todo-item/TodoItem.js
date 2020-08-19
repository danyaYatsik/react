import React from "react";
import './TodoItem.scss';
import {useDispatch} from "react-redux";
import {removeTodoAction} from "../../state/todo/actions";

function TodoItem({todo, index}) {

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(removeTodoAction(todo));
    }

    return <li className='todoItem'>
        <span>
            <strong>
            {index + 1}
            </strong>
            &nbsp;
            {todo.title}
        </span>
        <button className='todoItem'
                onClick={() => handleClick()}
        >&times;</button>
    </li>
}

export default TodoItem