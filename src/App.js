import AddTodo from "./components/AddTask";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import ControlBar from "./components/ControlBar";

const App = () => {

    return (
        <div className="App container p-2" style={{width: 500}}>
            <AddTodo/>
            <Counter/>
            <TodoList/>
            <ControlBar/>
        </div>);
}

export default App;
