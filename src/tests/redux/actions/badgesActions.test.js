import '@testing-library/jest-dom'
import { editSync, listSync } from '../../../redux/actions/badgesActions'
import { typesBadges } from '../../../redux/types/types'

describe('Acciones de CRUD para placas', ()=>{
    test('edit sincronico', ()=>{
        const nueva = {}

        const editAction = editSync(nueva)
        expect(editAction).toEqual({
            type: typesBadges.edit,
            payload: { nueva }
        })
    })
    test('listar las placas sincronicamente', ()=>{
        const lista = []

        const listAction = listSync(lista)
        expect(listAction).toEqual({
            type: typesBadges.list,
            payload: lista
        })
    })
})