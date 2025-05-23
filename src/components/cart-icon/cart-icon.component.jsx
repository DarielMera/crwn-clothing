import { useContext } from "react"

import { CartContext } from "../../context/cart.context"

import { CartIconContainer, CartShoppingIcon, CartItemCount } from "./cart-icon.styles.jsx"

import "./cart-icon.styles.jsx"

const CartIcon = () => {
	const { visibility, setVisibility, totalItemsInCart } = useContext(CartContext)

	const toggleVisibility = () => setVisibility(!visibility)

	return (
		<CartIconContainer onClick={toggleVisibility}>
			<CartShoppingIcon className="shopping-icon" />
			<CartItemCount>{totalItemsInCart}</CartItemCount>
		</CartIconContainer>
	)
}

export default CartIcon
