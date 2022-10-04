import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext';

const ToolbarCliente = () => {
    const { showModal, modalTitle, setModalTitle, setShowModal} = useContext(ModalContext);
    const abrirModalCrear = () => {
        setModalTitle("Registrar nuevo cliente");
        setShowModal(true);
    }
    return (
    <div className="container">
        <button 
            className='button is-small is-primary'
            onClick={ () => abrirModalCrear() }
        >
            <span className='icon is-email'>
                <i className='fas fa-plus'></i>
            </span>
            <span>Registar Nuevo</span>
        </button>
    </div>
  )
}

export default ToolbarCliente