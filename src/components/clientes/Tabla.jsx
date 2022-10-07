import React, { useContext, useEffect, useState } from 'react'
import RowTablaCliente from './RowTablaCliente';
import { ClienteContext } from "../context/ClienteContext"

const Tabla = () => {
  const { clienteList, obtenerClientes } = useContext(ClienteContext);

  useEffect( () => {
    obtenerClientes();
  }, []);
  if( clienteList.length === 0){
    return (
        <center><p>No existen clientes</p></center>
    )
  }
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
                    clienteList.map( cliente => {
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