import React, { createContext, useReducer } from 'react'
import ClienteReducer from '../reducer/ClienteReducer';

export  const ClinteContext = createContext();
export const ClienteContextProvider = props => {
    const initialState = {
        clienteList: [],

    }
    const [state, dispatch] = useReducer(ClienteReducer, initialState);
}