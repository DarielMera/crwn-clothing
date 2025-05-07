import { useState, useContext } from "react"

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

import { DropdownContext } from "../../context/dropdown.context"

import "./cart-icon.styles.scss"

const CartIcon = () => {
	const { visibility, setVisibility } = useContext(DropdownContext)

	const toggleVisibility = () => setVisibility(!visibility)

	return (
		<div className="cart-icon-container" onClick={toggleVisibility}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	)
}

export default CartIcon
