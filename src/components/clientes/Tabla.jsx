import React from 'react'

const Tabla = () => {
  return (
    <div className='table-container'>
        <table className='table is-hoverable'>
            <thead>
                <tr>
                    <th>Acciones</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
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
                    <td>Jorge</td>
                    <td>Meza</td>
                    <td>Calle Samuel Goldstein 546, col Verde Valle </td>
                    <td>2222209901</td>
                    <td>jorberiverplate@yahoo.com.mx</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Tabla