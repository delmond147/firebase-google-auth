import { createContext, useEffect, useState, useContext } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import {auth} from '../firebase'


const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("")

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signin(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    function googleSignin() {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return <userAuthContext.Provider value={{user, signup, signin, logout, googleSignin}}>{children}</userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext)
}