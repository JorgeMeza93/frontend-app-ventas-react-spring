import React from 'react'
import { useContext } from 'react';
import { ClienteContext } from '../context/ClienteContext';
import { ModalContext } from '../context/ModalContext';

const RowTablaCliente = ( {cliente} ) => {
    const { setModalTitle, setShowModal} = useContext(ModalContext);
    const { obtenerCliente, eliminarCliente } = useContext(ClienteContext)
    
    const {nombres, apellido, direccion, telefono, email, idCliente} = cliente;
    
    
    const abrirModificarCliente = () => {
        obtenerCliente(cliente);
        setModalTitle("Modificar cliente");
        setShowModal(true);
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
            <button className='button is-small is-danger' 
                title='Eliminar'
                onClick={ () => eliminarCliente(idCliente)}
            >
                <span className='icon is-email'>
                    <i className='fas fa-trash-alt'></i>
                </span>
            </button>
        </td>
        <td>{nombres}</td>
        <td>{apellido}</td>
        <td>{direccion}</td>
        <td>{telefono}</td>
        <td>{email}</td>
    </tr>
  )
}

export default RowTablaCliente