import React, {useEffect, useState} from 'react';
import Check from "./Check";
import ModalWin from "./ModalWin";
import { connect} from "react-redux";
import {completeTodo} from "../../redux/actions";

const TodoItem = (props) => {
    const [modalIsShown, setModalIsShown] = useState(false)
    const handleClose = () => setModalIsShown(false)
    const handleOpen = () => setModalIsShown(true)

    return (
        <div>
            <div className='container mb-4 bg-light p-2 rounded-3'>
                <div className="d-flex fs-4">
                    <Check isCompleted={props.todo.isCompleted} id={props.todo.id}/>
                    <div onClick={handleOpen}
                         className={`container-fluid offset-1 ${props.todo.isCompleted ? `text-decoration-line-through` : ''}`}>{props.todo.title}</div>
                </div>
                <div className="text-end">{`${new Date(props.todo.date).toLocaleDateString()} ${new Date(props.todo.date).toLocaleTimeString()}`}</div>
                <ModalWin item={props.todo} modalIsShown={modalIsShown} modalHandleClose={handleClose}/>
            </div>
        </div>
    );
}
const mapDispatchToProps = {
    completeTodo
}
export default connect(null, mapDispatchToProps)(TodoItem);