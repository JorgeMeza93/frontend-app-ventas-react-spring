import React from 'react'
import Tabla from '../clientes/Tabla'
import ToolbarCliente from '../clientes/ToolbarCliente'
import Layout from '../Layout'
import Modal from './Modal'

const Clientes = () => {
  return (
    <div>
        <Layout>
            <div className="panel-heading">
                Clientes
            </div>
            <div className="box">
               <ToolbarCliente/>
                <Tabla/>
            </div>
            <Modal/>
        </Layout>
    </div>
  )
}

export default Clientes