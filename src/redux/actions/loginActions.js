import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { facebook, google } from "../../Firebase/firebaseConfig"
import { typesLogin } from "../types/types"
import { actionRegisterSync } from "./actionRegister"

//Login
export const actionLoginAsync = (email, pass) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, pass)
            .then(({ user }) => {
                dispatch(actionLoginSync(email, pass))
            })
            .catch(error => {
                console.warn(error, 'Usuario No autorizado')
            })

    }
}

export const actionLoginSync = (email, pass) => {
    return {
        type: typesLogin.login,
        payload: { email, pass }
    }
}

//Logout
export const actionLogoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
            .then(({ user }) => {
                dispatch(actionLogoutSync())
            })
            .catch((error) => { console.warn(error, '') });
    }
}


export const actionLogoutSync = () => {
    return {
        type: typesLogin.logout
    }
}

//SocialMedia LOGIN
export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                console.log(user, 'Usuario Autorizado, Bienvenido')
                dispatch(actionRegisterSync(user.displayName, user.email, "", "", "https://res.cloudinary.com/dd5yolnde/image/upload/v1656300664/buffalo-sprint3/user_fa0maw.png", "", "", "", ""))
            })
            .catch(error => {
                console.warn(error, 'Usuario NO Autorizado')
            })
    }
}

export const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                console.log(user, 'Usuario Autorizado, Bienvenido')
                dispatch(actionRegisterSync(user.displayName, user.email, "", "", user.photoURL, "", "", "", ""))
            })
            .catch(error => {
                console.warn(error, 'Usuario NO Autorizado')
            })
    }
}
