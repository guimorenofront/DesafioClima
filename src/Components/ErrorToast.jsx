import React from 'react';
import Modal from 'react-bootstrap/Modal';
function ModalError(props) {
    return (
        <Modal contentClassName='ErrorModal'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>Erro: {props.error?.cod}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{props.error?.message}</h3>
            </Modal.Body>
        </Modal>
    );
}

export default ModalError;