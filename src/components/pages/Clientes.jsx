import React from 'react'
import FormularioCliente from '../clientes/FormularioCliente'
import Tabla from '../clientes/Tabla'
import ToolbarCliente from '../clientes/ToolbarCliente'
import { ClienteContextProvider } from '../context/ClienteContext'
import Layout from '../Layout'
import Modal from './Modal'

const Clientes = () => {
  return (
    <div>
        <Layout>
          <ClienteContextProvider>
            <div className="panel-heading">
                  Clientes
              </div>
              <div className="box">
                <ToolbarCliente/>
                  <Tabla/>
              </div>
              <Modal>
                <FormularioCliente/>
              </Modal>
          </ClienteContextProvider>    
        </Layout>
    </div>
  )
}

export default Clientes