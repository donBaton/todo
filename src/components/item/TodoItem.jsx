import React, {useEffect, useState} from 'react';
import Check from "./Check";
import ModalWin from "./ModalWin";
import DateMapper from "../../utils/DateMapper";

const TodoItem = ({todo, todos, handleTodos}) => {
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted)
    const [modalIsShown, setModalIsShown] = useState(false)

    useEffect(() => {
        const copy = [...todos]
        const current = copy.find(t => t.id === todo.id)
        current.isCompleted = !current.isCompleted
        handleTodos(copy)
    }, [isCompleted])


    const handleClose = () => setModalIsShown(false)
    const handleOpen = () => setModalIsShown(true)

    function getFormattedDate() {
        let date = new Date(todo.date);
        return DateMapper.toString(date);
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
                <ModalWin item={todo} modalIsShown={modalIsShown} modalHandleClose={handleClose} todos={todos} handleTodos={handleTodos}/>
            </div>
        </div>
    );
}

export default TodoItem;