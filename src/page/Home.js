import React from "react";
import Form from "../component/form/Form";
import TodoList from "../component/todo-list/TodoList";

function Home() {

    return <div>
        <h1>What I have to get done?</h1>
        <Form/>
        <hr/>
        <TodoList/>
    </div>
}

export default Home