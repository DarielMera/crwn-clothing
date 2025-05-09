import { useContext } from "react"

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

import { CartContext } from "../../context/cart.context"

import "./cart-icon.styles.scss"

const CartIcon = () => {
	const { visibility, setVisibility, totalItemsInCart} = useContext(CartContext)

	const toggleVisibility = () => setVisibility(!visibility)

	return (
		<div className="cart-icon-container" onClick={toggleVisibility}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{totalItemsInCart}</span>
		</div>
	)
}

export default CartIcon
