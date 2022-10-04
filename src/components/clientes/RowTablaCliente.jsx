import React from 'react'
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const RowTablaCliente = ( {cliente} ) => {
    const { showModal, modalTitle, setModalTitle, setShowModal} = useContext(ModalContext);
    const {nombre, apellidos, direccion, telefono, email} = cliente;
    const abrirModificarCliente = () => {
        setModalTitle("Modificar cliente");
        setShowModal(true);
    }
    const eliminarCliente = () => {
        console.log("Eliminando cliente");
    }
    return (
    <tr>
        <td>
            <button 
                className='button is-small is-info mr-1' 
                title='Modificar'
                onClick={ () => abrirModificarCliente() }
                >
                <span className='icon is-email'>
                    <i className='fas fa-edit'></i>
                </span>
            </button>
            <button className='button is-small is-danger' title='Eliminar'>
                <span className='icon is-email'>
                    <i className='fas fa-trash-alt'></i>
                </span>
            </button>
        </td>
        <td>{nombre}</td>
        <td>{apellidos}</td>
        <td>{direccion}</td>
        <td>{telefono}</td>
        <td>{email}</td>
    </tr>
  )
}

export default RowTablaCliente