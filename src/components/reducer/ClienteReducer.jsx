import { OBTENER_CLIENTES } from "../../const/actionTypes";

export default (state, action) => {
    switch (action.type) {
        case OBTENER_CLIENTES:
            return {
                ...state,
                clienteList: action.payload
            }
        default:
            return state;
    }
}