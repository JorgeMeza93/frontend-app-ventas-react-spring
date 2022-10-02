import React from 'react'
import Tabla from '../clientes/Tabla'
import Layout from '../Layout'

const Clientes = () => {
  return (
    <div>
        <Layout>
            <div className="panel-heading">
                Clientes
            </div>
            <div className="box">
                <div className="container">
                    <button className='button is-small is-primary'>
                        <span className='icon is-email'>
                            <i className='fas fa-plus'></i>
                        </span>
                        <span>Registar Nuevo</span>
                    </button>
                </div>
            </div>
            <Tabla/>
        </Layout>
    </div>
  )
}

export default Clientes