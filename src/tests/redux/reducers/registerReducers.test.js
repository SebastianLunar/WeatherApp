import '@testing-library/jest-dom'
import { registerReducer } from '../../../redux/reducers/registerReducers'
import { typesRegister } from '../../../redux/types/types'


describe('Pruebas registerreducer', () => {
    test('resgistro realizado', () => {
        const initState = {}
        const action = {
            type: typesRegister.register,
            payload: {
                name: 'Sebastian',
                email: 'selunar@outlook.com',
                password: 'geek123',
                image: 'url'
                
            }
        }
        
        const state = registerReducer (initState, action)
        expect( state ).toEqual({
            name: 'Sebastian',
            email: 'selunar@outlook.com',
            password: 'geek123',
            image: 'url'
        })
    })
})