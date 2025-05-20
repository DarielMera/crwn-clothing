import { createContext, useState, useEffect } from "react"

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
	setTotalItemsInCart: () => {},
	incrementQuantity: () => {},
	decrementQuantity: () => {},
	removeProductFromCheckout: () => {},
	grandTotalPrice: 0,
})

export const CartProvider = ({ children }) => {
	const [visibility, setVisibility] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [totalItemsInCart, setTotalItemsInCart] = useState(0)
	const [grandTotalPrice, setGrandTotalPrice] = useState(0)

	const addItemTocart = productToAdd => {
		setCartItems(addCartItem(cartItems, productToAdd))
	}

	useEffect(() => {
		const newItemsTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
		const newPriceGrandTotal = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		)

		setTotalItemsInCart(newItemsTotal)
		setGrandTotalPrice(newPriceGrandTotal)

	}, [cartItems])

	const decrementQuantity = productId => {
		setCartItems(() => {
			return cartItems.map(cartItem =>

				cartItem.id === productId
					? { ...cartItem, quantity: cartItem.quantity === 0 ?  removeProductFromCheckout(productId)  : cartItem.quantity - 1 }
					: cartItem
			)
		})
	}

	const incrementQuantity = productId => {
		setCartItems(() => {
			return cartItems.map(cartItem =>
				cartItem.id === productId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
			)
		})
	}

	const removeProductFromCheckout = productId => {
		setCartItems(() => {
			return cartItems.filter(cartItem => cartItem.id !== productId)
		})
	}

	const value = {
		visibility,
		setVisibility,
		addItemTocart,
		cartItems,
		totalItemsInCart,
		incrementQuantity,
		decrementQuantity,
		removeProductFromCheckout,
		grandTotalPrice,
	}
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
