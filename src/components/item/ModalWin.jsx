import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

const ModalWin = (props) => {

    return (
        <div>
            <Modal show={props.modalIsShown} onHide={props.modalHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Task from {props.item.date}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.item.title}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.modalHandleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalWin;