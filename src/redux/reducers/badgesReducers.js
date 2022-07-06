import { typesBadges } from "../types/types"

const initialState = {
    lista: []
}

export const badgesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesBadges.add:
            return {
                lista: [...state.lista, action.payload]
            }
        case typesBadges.delete:
            return {
                lista: state.lista.filter(c => c.id !== action.payload)
            }
        case typesBadges.list:
            return {
                lista: [...action.payload]
            }
        case typesBadges.edit:
            return {
                ...state
            }
        default:
            return state
    }
}