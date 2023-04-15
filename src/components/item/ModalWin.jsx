import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import {connect} from "react-redux";
import {deleteTodo, updateTodo} from "../../redux/actions";

const ModalWin = (props) => {
    const [todoTitle, setTodoTitle] = useState(props.item.title)
    const [showWarn, setShowWarn] = useState(false)
    const save = () => {
        if (todoTitle === null || todoTitle === '') {
            setShowWarn(true)
        } else {
            props.updateTodo(props.item.id, todoTitle)
            props.modalHandleClose()
        }
    }
    const del = () => {
        props.deleteTodo(props.item.id)
        props.modalHandleClose()
    }

    return (
        <div>
            <Modal show={props.modalIsShown} onHide={props.modalHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Task from {`${new Date(props.item.date).toLocaleDateString()} ${new Date(props.item.date).toLocaleTimeString()}`}</Modal.Title>
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

const mapDispatchToProps = {
    updateTodo,
    deleteTodo
}
export default connect(null, mapDispatchToProps)(ModalWin);