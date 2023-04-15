import AddTodo from "./components/AddTask";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import ControlBar from "./components/ControlBar";
import Repo from "./repo/Repo"
import {useEffect, useState} from "react";

const App = () => {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        async function fetchTodos() {
            const todos = await Repo.get('todos')
            setIsLoading(false)
            setTodos(todos)
        }
        fetchTodos();
    }, [])

    return (
        <div className="App container p-2" style={{width: 500}}>
            <AddTodo/>
            <Counter/>
            <TodoList/>
            {/*<ControlBar todos={todos} handlerTodos={setTodos} isLoading={isLoading} handlerIsLoading={setIsLoading}/>*/}
        </div>);
}

export default App;
