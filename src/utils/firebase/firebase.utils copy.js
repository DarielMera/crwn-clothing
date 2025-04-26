import { initializeApp } from "firebase/app"
// importing from the firebae sdk the initializedapp function - from the app section
// this will help me conect my declared app on firebae with my front end app here
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
// importing 4 functions from the firebase / auth module
// this will help me authenticate creagted users; by googleauthprovider credentials or by providing email and password
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
// importing 4 functions from the firebase/firestre section
// this kit will help me creagte a firestore database; creagte a connection and get or set documents




// this next object is a copy of the online created firebase credentials after declaring 
// the app on firebase. 
const firebaseConfig = {
	apiKey: "AIzaSyAnD1iaQGIPhhPGLlVS3Gaw12vlUAMucEU",
	authDomain: "crwn-clothing-db-a345e.firebaseapp.com",
	projectId: "crwn-clothing-db-a345e",
	storageBucket: "crwn-clothing-db-a345e.firebasestorage.app",
	messagingSenderId: "344523260552",
	appId: "1:344523260552:web:c8647ab179562ecf73953d",
}

// Initialize Firebase
// i pass the above object of credentials to the initializeapp function to initialize the app

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
	prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    console.log("additionalInformation:", additionalInformation);
    if(!userAuth) return
	const userDocRef = doc(db, "users", userAuth.uid)

	console.log(userDocRef)

	const userSnapshot = await getDoc(userDocRef)
	console.log(userSnapshot)
	console.log(userSnapshot.exists())

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
                ...additionalInformation
			})
		} catch (error) {
			console.log("error creating the user", error.message)
		}
	}

	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password)=> {
  if(!email || !password) return 
  return await createUserWithEmailAndPassword(auth, email, password)
}
