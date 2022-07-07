import '@testing-library/jest-dom'
import { loginReducer } from '../../../redux/reducers/loginReducers'
import { typesLogin } from '../../../redux/types/types'


describe('Pruebas loginreducer', () => {
    test('login realizado', () => {
        const initState = {}
        const action = {
            type: typesLogin.login,
            payload: {
                email: 'selunar@outlook.com',
                password: 'Sebastian'
            }
        }
        
        const state = loginReducer (initState, action)
        expect( state ).toEqual({
            email: 'selunar@outlook.com',
            password: 'Sebastian'
        })
    })
    test('sesion cerrada', () => {
        const initState = {
            email: 'selunar@outlook.com',
            password: 'Sebastian'
        }
        const action = {
            type: typesLogin.logout,
        }
        
        const state = loginReducer (initState, action)
        expect( state ).toEqual([])
    })
})