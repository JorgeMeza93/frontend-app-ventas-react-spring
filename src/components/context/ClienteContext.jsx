import React, { createContext, useReducer } from 'react'
import ClienteReducer from '../reducer/ClienteReducer';
import { OBTENER_CLIENTES } from '../../const/actionTypes';

export  const ClienteContext = createContext();
export const ClienteContextProvider = props => {
    const initialState = {
        clienteList: [],

    }
    const [state, dispatch] = useReducer(ClienteReducer, initialState);
    const obtenerClientes = () => {
        const clientes = [
            {
                "idCLiente": 1,
                "nombre": "Jorge",
                "apellido": "Meza",
                "direccion": "Calle Lancaster 4545",
                "telefono": "5555521456",
                "email": "jorberiver@gmail.com"
            }
        ]
        dispatch({
            type: OBTENER_CLIENTES,
            payload: clientes
        })
    }


    return (
        <ClienteContext.Provider
            value={{
                clienteList: state.clienteList, obtenerClientes
            }}
        >
            {props.children}
        </ClienteContext.Provider>
    )
}