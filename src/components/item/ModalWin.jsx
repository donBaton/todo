import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import DateMapper from "../../utils/DateMapper";

const ModalWin = (props) => {
    const [todoTitle, setTodoTitle] = useState(props.item.title)
    const [showWarn, setShowWarn] = useState(false)
    const save = () => {
        if (todoTitle === null || todoTitle === '') {
            setShowWarn(true)
        } else {
            const copy = [...props.todos]
            const current = copy.find(t => t.id === props.item.id)
            current.title = todoTitle
            props.handleTodos(copy)
            props.modalHandleClose()
        }
    }
    const del = () => {
        const copy = props.todos.filter((e) => {
            return e.id !== props.item.id
        })
        props.handleTodos(copy)
        props.modalHandleClose()
    }

    const getDate = () => {
        return DateMapper.toString(new Date(props.item.date))
    }
    return (
        <div>
            <Modal show={props.modalIsShown} onHide={props.modalHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Task from {getDate()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                  rows="3" onChange={e => setTodoTitle(e.target.value)} defaultValue={todoTitle}/>
                        <div className={`${showWarn ? 'visible' : 'visually-hidden'} text-danger`}>
                            Please add description
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={del}>
                        delete
                    </Button>
                    <Button variant="primary" onClick={save}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalWin;