import React from 'react';
import Button from "react-bootstrap/Button";
import Repo from '../repo/Repo'
import {connect, useDispatch} from "react-redux";
import {fetchTodos, saveTodos} from "../redux/actions";

const ControlBar = (props) => {
    const dispatch = useDispatch()
    // const save = async () => {
    //     props.handlerIsLoading(true)
    //     await Repo.set('todos', props.todos)
    //     props.handlerIsLoading(false)
    // }

    function save() {
        return dispatch(saveTodos(props.todos));
    }

    function load() {
        return dispatch(fetchTodos());
    }

    return (
        <div className='flex-d '>
            <Button onClick={save} className={`btn btn-primary float-end offset-1 ${props.isLoading && 'disabled'}`}>Save</Button>
            <Button onClick={load} className={`btn btn-secondary float-end ${props.isLoading && 'disabled'}`}>Load</Button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos,
        isLoading: state.loader.isLoading
    }
}

export default connect(mapStateToProps, null)(ControlBar);