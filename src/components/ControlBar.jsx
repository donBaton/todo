import React from 'react';
import Button from "react-bootstrap/Button";
import Repo from '../repo/Repo'
import {useDispatch} from "react-redux";
import {fetchTodos} from "../redux/actions";

const ControlBar = (props) => {
    const dispatch = useDispatch()
    const save = async () => {
        props.handlerIsLoading(true)
        await Repo.set('todos', props.todos)
        props.handlerIsLoading(false)
    }
    const discard = async () => {
        props.handlerIsLoading(true)
        props.handlerTodos(await Repo.get('todos'))
        props.handlerIsLoading(false)
    }

    function getOnClick() {
        return dispatch(fetchTodos());
    }

    return (
        <div className='flex-d '>
            <Button onClick={save} className={`btn btn-primary float-end offset-1 ${props.isLoading && 'disabled'}`}>Save</Button>
            <Button onClick={getOnClick} className={`btn btn-secondary float-end ${props.isLoading && 'disabled'}`}>Discard</Button>
        </div>
    )
}

export default ControlBar;