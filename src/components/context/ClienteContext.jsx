import React, { createContext, useReducer } from 'react'
import ClienteReducer from '../reducer/ClienteReducer';
import { MODIFICAR_CLIENTE, OBTENER_CLIENTE, OBTENER_CLIENTES, REGISTRAR_CLIENTE } from '../../const/actionTypes';
import { v4 as uuidv4 } from 'uuid';

export  const ClienteContext = createContext();
export const ClienteContextProvider = props => {
    const initialState = {
        clienteList: [],
        clienteActual: null
    }
    const [state, dispatch] = useReducer(ClienteReducer, initialState);
    const obtenerClientes = () => {
        const clientes = [
           
        ]
        dispatch({
            type: OBTENER_CLIENTES,
            payload: clientes
        })
    }

    const registarCliente = (cliente) => {
        let clienteNuevo = {
            ...cliente,
            idCLiente: uuidv4()
        }
        console.log(clienteNuevo)
        dispatch({
            type: REGISTRAR_CLIENTE,
            payload: clienteNuevo
        })
    }

    const obtenerCliente = (cliente) => {
        dispatch({
            type: OBTENER_CLIENTE,
            payload: cliente
        })
    }
    const actualizarCliente = cliente => {
        dispatch({
            type: MODIFICAR_CLIENTE,
            payload: cliente
        })
    }
    return (
        <ClienteContext.Provider
            value={{
                clienteList: state.clienteList, clienteActual: state.clienteActual, obtenerClientes, registarCliente, obtenerCliente, actualizarCliente
            }}
        >
            {props.children}
        </ClienteContext.Provider>
    )
}