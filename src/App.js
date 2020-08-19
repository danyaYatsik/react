import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Navbar from "./component/navbar/Navbar";
import {useDispatch} from "react-redux";
import {fetchTodosAction} from "./state/todo/actions";

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodosAction())
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Navbar/>
            <div className='container'>
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/about'} component={About}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
