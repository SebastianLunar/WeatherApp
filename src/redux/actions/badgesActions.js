import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { database } from "../../Firebase/firebaseConfig"
import { typesBadges } from "../types/types"

//Editar
export const editAsync = (nueva) => {
    return async (dispatch) => {
        const collectionBadges = collection(database, "badges")
        const q = query(collectionBadges, where("id", "==", nueva.id))

        const datosQ = await getDocs(q)
        let id

        datosQ.forEach(async (obj) => {
            id = obj.id
        })

        const docRef = doc(database, "badges", id)

        await updateDoc(docRef, nueva)
            .then(resp => {
                dispatch(editSync(nueva))
                dispatch(listAsync())
            })
            .catch(error => console.log(error))
    }
}

export const editSync = (nueva) => {
    return {
        type: typesBadges.edit,
        payload: { nueva }
    }
}

//Listar
export const listAsync = () => {
    return async (dispatch) => {
        const datos = []
        const Placas = await getDocs(collection(database, "badges"))
        Placas.forEach(obj => {
            datos.push(
                {
                    ...obj.data()
                }
            )
        })
        dispatch(listSync(datos))
    }
}

export const listSync = (lista) => {
    return {
        type: typesBadges.list,
        payload: lista
    }
}


//Agregar
export const addAsync = (value) => {
    return (dispatch) => {
        addDoc(collection(database, "badges"), value)
            .then(resp => {
                dispatch(addSync(value))
                dispatch(listAsync())
            })
            .catch(error => {
                console.warn(error, 'Datos no guardados')
            })
    }
}

export const addSync = (value) => {
    return {
        type: typesBadges.add,
        payload: value
    }
}

//Eliminar
export const deleteAsync = (id) => {
    return async (dispatch) => {
        const Placas = collection(database, "badges")
        const q = query(Placas, where("id", "==", id))
        const datos = await getDocs(q)

        datos.forEach(obj => {
            deleteDoc(doc(database, "badges", obj.id))
        })
        dispatch(deleteSync(id))
    }
}

export const deleteSync = (id) => {
    return {
        type: typesBadges.delete,
        payload: id
    }
}