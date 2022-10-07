import React, { createContext, useReducer } from 'react'
import ClienteReducer from '../reducer/ClienteReducer';
import { OBTENER_CLIENTES, REGISTRAR_CLIENTE } from '../../const/actionTypes';
import { v4 as uuidv4 } from 'uuid';

export  const ClienteContext = createContext();
export const ClienteContextProvider = props => {
    const initialState = {
        clienteList: [],

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

    return (
        <ClienteContext.Provider
            value={{
                clienteList: state.clienteList, obtenerClientes, registarCliente
            }}
        >
            {props.children}
        </ClienteContext.Provider>
    )
}