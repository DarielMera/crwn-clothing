import { useContext } from "react"

import { CartContext } from "../../context/cart.context"

import CartCheckOutItem from "../cart-checkout-item/cart-checkout-item.component"

import "./cart-checkout-list.styles.scss"

const CartCheckOutList = () => {
	const { cartItems, grandTotalPrice } = useContext(CartContext)
	return (
		<div className="list-container">
			<div className="table-title">
				<span>Product</span>
				<span>Description</span>
				<span>Quantity</span>
				<span>Price</span>
				<span>Remove</span>
			</div>

			<div>
				{cartItems && cartItems.map(item => <CartCheckOutItem key={item.id} cartItem={item} />)}
			</div>
			<div className="total-grand-price">{`TOTAL: $${grandTotalPrice}`}</div>
		</div>
	)
}

export default CartCheckOutList
