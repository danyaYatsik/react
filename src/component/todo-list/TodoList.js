import React from "react";
import TodoItem from "../todo-item/TodoItem";
import './TodoList.scss'
import {useSelector} from "react-redux";

function TodoList() {

    const state = useSelector(state => state.todos);

    return <ul className='todoList'>
        {state.loading ?
            <p>LOADING...</p>
            :
            state.todos.length ?
                state.todos.map((todo, index) => (
                    <TodoItem todo={todo} index={index} key={todo.id}/>
                ))
                :
                <h2>Everything is done!!</h2>
        }
    </ul>
}

export default TodoList