import { createContext, useState } from "react"

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		)
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
	visibility: false,
	setVisibility: () => {},
	cartItems: [],
	addItemTocart: () => {},
	totalItemsInCart: 0,
	setTotalItemsInCart: () => {}
})

export const CartProvider = ({ children }) => {
	const [visibility, setVisibility] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [totalItemsInCart, setTotalItemsInCart] = useState(0)

	const addItemTocart = productToAdd => {
		setCartItems(addCartItem(cartItems, productToAdd))
	}

	const SumTotalCartItem = () => {
		setTotalItemsInCart(()=>{
			return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 1)

		})
	}

	const value = { visibility, setVisibility, addItemTocart, cartItems, SumTotalCartItem, totalItemsInCart }
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


