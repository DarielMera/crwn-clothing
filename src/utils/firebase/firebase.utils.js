import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyAnD1iaQGIPhhPGLlVS3Gaw12vlUAMucEU",
	authDomain: "crwn-clothing-db-a345e.firebaseapp.com",
	projectId: "crwn-clothing-db-a345e",
	storageBucket: "crwn-clothing-db-a345e.firebasestorage.app",
	messagingSenderId: "344523260552",
	appId: "1:344523260552:web:c8647ab179562ecf73953d",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
	prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async userAuth => {
	const userDocRef = doc(db, "users", userAuth.uid)

	console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot);
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef
}
