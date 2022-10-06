import React, { createContext, useReducer } from 'react'
import ClienteReducer from '../reducer/ClienteReducer';

export  const ClienteContext = createContext();
export const ClienteContextProvider = props => {
    const initialState = {
        clienteList: [],

    }
    const [state, dispatch] = useReducer(ClienteReducer, initialState);
    return (
        <ClienteContext.Provider
            value={{
                clienteList: state.clienteList
            }}
        >
            {props.children}
        </ClienteContext.Provider>
    )
}