import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent() {
  const [show, setShow] = useState(true);
  const isCentered = true;
  const cancelButtonName = "Close"
  const okButtonName = "Start"
  const isClosable =true
  const children = "Quiz will be automatically submitted once the allocated time is over."


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered ={isCentered}
      >
        <Modal.Header closeButton={isClosable}>
          <Modal.Title>Start Attempt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          {isClosable && <Button className=' col-4 mx-auto' variant="secondary" onClick={handleClose}>
            {cancelButtonName}
          </Button>}
              <Button className=' col-4 mx-auto' variant="primary">{okButtonName}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;