import React from 'react';
import Button from "react-bootstrap/Button";
import Repo from '../repo/Repo'

const ControlBar = (props) => {
    const save = () => {
        Repo.set('todos', props.todos)
    }
    const discard = () => {
        window.location.reload()
    }
    return (
        <div className='flex-d '>
            <Button onClick={save} className='btn btn-primary float-end offset-1'>Save</Button>
            <Button onClick={discard} className='btn btn-secondary float-end '>Discard</Button>
        </div>
    )
}

export default ControlBar;