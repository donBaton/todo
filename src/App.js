import AddTodo from "./components/AddTask";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import ControlBar from "./components/ControlBar";
import Repo from "./repo/Repo"
import {useState} from "react";

const App = () => {
    const [todos, setTodos] = useState(Repo.get('todos') || [])

    return (
        <div className="App container p-2" style={{width: 500}}>
            <AddTodo todos={todos} handlerTodos={setTodos}/>
            <Counter todos={todos}/>
            <TodoList todos={todos} handlerTodos={setTodos}/>
            <ControlBar todos={todos} handlerTodos={setTodos}/>
        </div>);
}

export default App;
