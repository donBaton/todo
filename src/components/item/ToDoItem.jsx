import React, {useState} from 'react';
import Check from "./Check";
import ModalWin from "./ModalWin";

const ToDoItem = ({todo}) => {
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted)
    const [modalIsShown, setModalIsShown] = useState(false)
    const handleClose = () => setModalIsShown(false)
    const handleOpen = () => setModalIsShown(true)

    function getFormattedDate() {
        let date = new Date(todo.date);
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
    return (
        <div>
            <div className='container mb-4 bg-light p-2 rounded-3'>
                <div className="d-flex fs-4">
                    <Check isCompleted={isCompleted} id={todo.id} handleIsCompleted={setIsCompleted}/>
                    <div onClick={handleOpen}
                         className={`container-fluid offset-1 ${isCompleted ? `text-decoration-line-through` : ''}`}>{todo.title}</div>
                </div>
                <div className="text-end">{getFormattedDate()}</div>
                <ModalWin item={todo} modalIsShown={modalIsShown} modalHandleClose={handleClose}/>
            </div>
        </div>
    );
}

export default ToDoItem;