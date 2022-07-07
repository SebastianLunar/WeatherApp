import '@testing-library/jest-dom'
import { actionLoginSync, actionLogoutSync } from '../../../redux/actions/loginActions'
import { typesLogin } from '../../../redux/types/types'

describe('Acciones login', ()=>{
    test('login sincronico', ()=>{
        const email = 'selunar@outlook.com'
        const pass = 'geek123'

        const loginAction = actionLoginSync(email, pass)
        expect(loginAction).toEqual({
            type: typesLogin.login,
            payload: { email, pass}
        })
    })
    test('cierre de sesion', ()=>{
        const email = 'selunar@outlook.com'
        const pass = 'geek123'

        const logoutAction = actionLogoutSync ()
        expect(logoutAction).toEqual({
            type: typesLogin.logout,
        })
    })
})