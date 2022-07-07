import '@testing-library/jest-dom'
import { typesLogin, typesBadges, typesRegister } from "../../../redux/types/types"

describe('Verificar types', () => {
    test('comparar objeto typesLogin', () => {
        expect(typesLogin).toEqual({
            login: 'login',
            logout: 'logout',
        })
    })
    test('comparar objeto typesBadges', () => {
        expect(typesBadges).toEqual({
            add: 'agregar',
            list: 'list',
            delete: 'eliminar',
            edit : 'edit',
        })
    })
    test('comparar objeto typesRegister', () => {
        expect(typesRegister).toEqual({
            register: 'register'
        })
    })
})