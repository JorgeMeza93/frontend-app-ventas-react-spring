import React, { useState } from 'react'

const Tabla = () => {
  const [clientesList, setClientesList] = useState([
    {
        "idCliente": 1,
        "nombre": "Jorge",
        "apellido": "Meza",
        "direccion": "Calle Samuel Goldstein 546, col Verde Valle",
        "telefono": "2225169936",
        "email": "jorge-riverplate.com"
    },
    {
        "idCliente": 2,
        "nombre": "James",
        "apellido": "McGill",
        "direccion": "Calle Broadway 234, Saint Michael",
        "telefono": "2220200181",
        "email": "jimmy-mcgill@yahoo.com"
    }
  ]);

  return (
    <div className='table-container'>
        <table className='table is-hoverable'>
            <thead>
                <tr>
                    <th>Acciones </th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    clientesList.map( cliente => {
                        const {nombre, apellidos, direccion, telefono, email} = cliente;
                        return (
                        <tr>
                        <td>
                            <button className='button is-small is-info mr-1' title='Modificar'>
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
                    </tr>)
                    })
                }
               
            </tbody>
        </table>
    </div>
  )
}

export default Tabla

//Calle Samuel Goldstein 546, col Verde Valle 