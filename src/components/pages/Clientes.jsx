import React from 'react'
import Layout from '../Layout'

const Clientes = () => {
  return (
    <div>
        <Layout>
            <div className="panel-heading">
                Clientes
            </div>
            <div className="box">
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
                        <tr><td>
                                <button className='button'>
                                    <span className='icon is-email'>
                                        <i className='fas fa-bold'></i>
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
        </Layout>
    </div>
  )
}

export default Clientes