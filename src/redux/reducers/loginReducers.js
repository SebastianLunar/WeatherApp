import { typesLogin } from "../types/types.js"

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case typesLogin.login:
            return {
                email: action.payload.email,
                password: action.payload.password
            }
        default:
            return state
    }
}