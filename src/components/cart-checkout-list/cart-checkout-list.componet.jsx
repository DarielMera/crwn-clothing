import { useContext } from "react"

import { CartContext } from "../../context/cart.context"

import CartCheckOutItem from "../cart-checkout-item/cart-checkout-item.component"

import {TableTitle, TotalGrandPrice} from "./cart-checkout-list.styles"

const CartCheckOutList = () => {
	const { cartItems, grandTotalPrice } = useContext(CartContext)
	return (
		<>
			<TableTitle>
				<span>Product</span>
				<span>Description</span>
				<span>Quantity</span>
				<span>Price</span>
				<span>Remove</span>
			</TableTitle>

			<div>
				{cartItems && cartItems.map(item => <CartCheckOutItem key={item.id} cartItem={item} />)}
			</div>
			<TotalGrandPrice>{`TOTAL: $${grandTotalPrice}`}</TotalGrandPrice>
		</>
	)
}

export default CartCheckOutList
