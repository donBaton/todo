import React, {useState} from 'react'

const AddTask = (props) => {
    const [toDoTitle, setToDoTitle] = useState('')
    const [showWarn, setShowWarn] = useState(false)

    const addItem = () => {
        if (toDoTitle === null || toDoTitle === '') {
            setShowWarn(true)
        } else {
            const copy = [...props.todos]
            copy.push({
                id: (copy.length || 0) + 1,
                title: {toDoTitle}.toDoTitle,
                date: new Date(),
                isCompleted: false
            })
            props.handlerTodos(copy)
            setToDoTitle('')
            setShowWarn(false)
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