import {createContext, useState, useContext} from 'react'

//create context
const ModalContext = createContext()

//create custom hook for use
export const useModal = ()=> useContext(ModalContext)

//create modal provider

export const ModalProvider = ({children})=>{
    const [modal, setModal] = useState({
        heading:"",
        cancel:"Cancel",
        ok:"Ok",
        statement:"",
        isClosable:true,
        isCentered:true,
        allowOffClick:false,
        show:false,
        goto:"",
        move:false
    })

    const closeModal = ()=>{
        setModal((prv)=>({
            ...prv,
            show:false
        }))
    }
    const showModal = ()=>{
        setModal((prv)=>({
            ...prv,
            show:true
        }))
    }

   

    return (
        <ModalContext.Provider value={{ modal, showModal,closeModal, setModal }}>
          {children}
        </ModalContext.Provider>
      );
}

