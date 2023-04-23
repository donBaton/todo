import AddTodo from "./components/AddTask";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import ControlBar from "./components/ControlBar";
import Repo from "./repo/Repo";
import {useEffect, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "./redux/actions";

const App = () => {
    // // const dispatch = useDispatch()
    // // const todos = useSelector(state => state.todos.todos)
    //
    // useEffect( () => {
    //     //dispatch(fetchTodos())
    //     // async function fetchTodos() {
    //     //     const todos = await Repo.get('todos')
    //     //     setIsLoading(false)
    //     //     setTodos(todos)
    //     // }
    //     // fetchTodos();
    // }, [])

    return (
        <div className="App container p-2" style={{width: 500}}>
            <AddTodo/>
            <Counter/>
            <TodoList/>
            <ControlBar/>
        </div>);
}

export default App;
