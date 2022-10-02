import React, { useState } from 'react'
import RowTablaCliente from './RowTablaCliente';

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
                        return (
                            <RowTablaCliente 
                            cliente={cliente} 
                            key={cliente.idCliente}
                            />
                        )
                    })
                }
               
            </tbody>
        </table>
    </div>
  )
}

export default Tabla

//Calle Samuel Goldstein 546, col Verde Valle 