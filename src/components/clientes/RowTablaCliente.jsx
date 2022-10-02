import React from 'react'

const RowTablaCliente = ( {cliente} ) => {
    const {nombre, apellidos, direccion, telefono, email} = cliente;
    const modificarCliente = () => {
        console.log("Modificando cliente");
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
                onClick={ () => modificarCliente() }
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