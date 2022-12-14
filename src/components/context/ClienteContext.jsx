import React, { createContext, useReducer } from 'react'
import ClienteReducer from '../reducer/ClienteReducer';
import { ELIMINAR_CLIENTE, MODIFICAR_CLIENTE, OBTENER_CLIENTE, OBTENER_CLIENTES, REGISTRAR_CLIENTE } from '../../const/actionTypes';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Swal from 'sweetalert2';

export  const ClienteContext = createContext();
export const ClienteContextProvider = props => {
    const initialState = {
        clienteList: [],
        clienteActual: null
    }
    const [state, dispatch] = useReducer(ClienteReducer, initialState);
    const obtenerClientes = async () => {
        try {
            const resultado = await Axios.get("/clientes")
            dispatch({
            type: OBTENER_CLIENTES,
            payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error ocurrido",
                text: "No se pudo obtener los clientes",
                toast: true
            });
            console.log(error);
        }
    }

    const registarCliente = async (cliente) => {
        try {
            const resultado = await Axios.post("/clientes", cliente);
            dispatch({
                type: REGISTRAR_CLIENTE,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerCliente = async (cliente) => {
        
        try {
            let clienteEncontrado = null
            if(cliente === null){
                const resultado = await Axios.get(`/clientes/${cliente.idCliente}`, cliente);
                clienteEncontrado = resultado.data
            }
            else{
                clienteEncontrado = cliente;
            }
            dispatch({
                type: OBTENER_CLIENTE,
                payload: clienteEncontrado
            })
        } catch (error) {
            console.log(error);
        }
       
    }
    const actualizarCliente = async cliente => {
        const resultado = await Axios.put("/clientes", cliente);
        try {
            dispatch({
                type: MODIFICAR_CLIENTE,
                payload: resultado.dataM
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    const eliminarCliente = async idCliente => {
       try {
            await Axios.delete(`/clientes/${idCliente}`);
            dispatch(
                { type: ELIMINAR_CLIENTE,
                payload: idCliente
        })
       } catch (error) {
            console.log(error)
       }
    }
    return (
        <ClienteContext.Provider
            value={{
                clienteList: state.clienteList, clienteActual: state.clienteActual, obtenerClientes, registarCliente, obtenerCliente, actualizarCliente, eliminarCliente
            }}
        >
            {props.children}
        </ClienteContext.Provider>
    )
}