import { OBTENER_CLIENTE, OBTENER_CLIENTES, REGISTRAR_CLIENTE } from "../../const/actionTypes";

export default (state, action) => {
    switch (action.type) {
        case OBTENER_CLIENTES:
            return {
                ...state,
                clienteList: action.payload
            };
        case REGISTRAR_CLIENTE:
            return {
                ...state,
                clienteList: [action.payload, ...state.clienteList]
            }
        case OBTENER_CLIENTE: 
            return {
                ...state,
                clienteActual: action.payload
            }
        default:
            return state;
    }
}