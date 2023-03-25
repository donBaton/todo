import React, {useEffect, useState} from 'react'
import Storage from "../repo/Storage"

const AddTask = () => {
    const [todos, setTodos] = useState(Storage.get("todos") || [])
    const [toDoTitle, setToDoTitle] = useState('')
    const [showWarn, setShowWarn] = useState(false)

    useEffect(() => {
        Storage.set('todos', todos)
    }, [todos])

    const addItem = () => {
        if (toDoTitle === null || toDoTitle === '') {
            setShowWarn(true)
        } else {
            const todos = Storage.get("todos")
            todos.push({
                id: (todos.length || 0) + 1,
                title: {toDoTitle}.toDoTitle,
                date: new Date(),
                isCompleted: false
            })
            setTodos(todos);
            setToDoTitle('')
            window.location.reload()
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addItem()
        }
    }

    return (
        <div className="container">
            <div className="row">
                <h3>Add new task:</h3>
            </div>
            <div className="row">
                <div>
                    <input
                        className="form-control"
                        type="text"
                        value={toDoTitle}
                        onChange={e => setToDoTitle(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder='Task description'
                        required
                    />
                    <div className={`${showWarn ? 'visible' : 'visually-hidden'} text-danger`}>
                        Please add description
                    </div>
                </div>
            </div>
            <div className="row py-3">
                <button className="btn btn-primary" onClick={addItem}>Add</button>
            </div>
        </div>)
}

export default AddTask