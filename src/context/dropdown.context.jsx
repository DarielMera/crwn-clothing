import { createContext, useState } from "react"

export const DropdownContext = createContext({
	visibility: false,
	setVisibility: ()=> {}
})

export const DropdownProvider = ({ children }) => {
	const [visibility, setVisibility] = useState(false)

	const value = { visibility, setVisibility }
	return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}
