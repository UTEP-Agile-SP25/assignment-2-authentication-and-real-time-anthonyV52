import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./config";
import { db } from "./config";
import {doc, setDoc} from "firebase/firestore"

export async function signUp(firstName, lastName, email, password) {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log("user signed up: ", userCredential.user.email)
        console.log("user id ", userCredential.user.uid)
        const userRef = doc(db, "users", userCredential.user.uid)

        await setDoc(userRef, {
            firstname:firstName,
            lastname:lastName,
            timestamp: new Date()
        })

    }catch(error){
        console.error("Error fetching user data: ", error)
    }
    
    
}

export async function login(email, password){
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        window.location.href = "songs.html"
    }catch(error){
        console.error("Login error: " + error.message)
    }
}

export async function logout(){
    try{
        await signOut(auth)
        console.log("user logged out")
    }
    catch(error){
        console.error("Logout error: " + error.message)
    }
}