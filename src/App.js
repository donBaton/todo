import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App container p-2" style={{width: 500}}>
            <AddTask />
            <Counter />
            <ToDoList />
        </div>);
}

export default App;
