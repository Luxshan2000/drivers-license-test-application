import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navigate } from 'react-router-dom';
import "../assets/CSS/modelStyle.css"

function ModalComponent() {
  const [show, setShow] = useState(true);
  const [move,setMove] = useState(false)
  const offClick = false
  const isCentered = true;
  const heading = "Start Attempt"
  const cancelButtonName = "Close"
  const okButtonName = "Start"
  const isClosable =true
  const children = "Quiz will be automatically submitted once the allocated time is over."
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSuccess =()=>{
    setMove(true)
  }

  return (
    <>
      {move && <Navigate to='/quiz/exam' />}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop={offClick ? true :'static' }
        keyboard={false}
        centered ={isCentered}
        contentClassName='custom-model'
      
      >
        <Modal.Header closeButton={isClosable}>
          <Modal.Title className='text-center w-100'>{heading}</Modal.Title>
        </Modal.Header>

        {children && <Modal.Body style={{textAlign:'center'}}>
          {children}
        </Modal.Body>}

        <Modal.Footer>
          {isClosable && <Button className=' col-4 mx-auto' variant="secondary" onClick={handleClose}>
            {cancelButtonName}
          </Button>}
          <Button onClick={handleSuccess} className=' col-4 mx-auto' variant="success">{okButtonName}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;