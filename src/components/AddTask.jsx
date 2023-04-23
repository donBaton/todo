import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {connect} from 'react-redux'
import {createTodo} from "../redux/actions";

const AddTask = (props) => {
    const [toDoTitle, setToDoTitle] = useState('')
    const [showWarn, setShowWarn] = useState(false)

    const addItem = () => {
        if (toDoTitle === null || toDoTitle === '') {
            setShowWarn(true)
        } else {
            props.createTodo({
                id: uuidv4(),
                title: {toDoTitle}.toDoTitle,
                date: new Date(),
                isCompleted: false
            })
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
                <button className="btn btn-primary" onClick={addItem} disabled={props.loader}>Add</button>
            </div>
        </div>)
}
const mapDispatchToProps = {
    createTodo
}

const mapStateToProps = state => {
    return {
        loader: state.loader.isLoading,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)