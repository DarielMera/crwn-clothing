import { createContext, useEffect, useState } from "react"
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils"

export const UserContext = createContext({
	currenUser: null,
	setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const value = { currentUser, setCurrentUser }


	useEffect(() => {
	const unsubscribe =	onAuthStateChangedListener((user)=>{
		console.log(user)
		if(user){
			createUserDocumentFromAuth(user)
		}
		setCurrentUser(user)
	})
	return unsubscribe
	}, [])

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
