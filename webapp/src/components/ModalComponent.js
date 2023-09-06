import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navigate, useNavigate } from 'react-router-dom';
import "../assets/CSS/modelStyle.css"
import { useModal } from '../context/ModalContext';

function ModalComponent() {
  const navigate = useNavigate()
  const {modal, closeModal}  = useModal()

  
  const heading = modal.heading
  const cancelButtonName = modal.cancel 
  const okButtonName = modal.ok
  const children = modal.statement
  const isClosable = modal.isClosable 
  const isCentered = modal.isCentered
  const offClick = modal.allowOffClick 
  const show = modal.show 
  const goto = modal.goto 
  
   
  

  
  const handleClose = () => closeModal();
  

  const handleSuccess =()=>{
    closeModal()
    navigate(goto) 
  }

  return (
    <>
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