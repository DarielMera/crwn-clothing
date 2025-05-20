import { useContext } from "react"

import { CartContext } from "../../context/cart.context"

import "./cart-checkout-item.styles.scss"

const CartCheckOutItem = ({ cartItem }) => {
	const { id, name, imageUrl, price, quantity } = cartItem

	const { incrementQuantity, decrementQuantity, removeProductFromCheckout } =
		useContext(CartContext)

	const incrementProductQuantity = () => incrementQuantity(id)

	const decrementProductQuantity = () => decrementQuantity(id)

	const removeProduct = () => removeProductFromCheckout(id)

	return (
		<div className="cart-checkout-item-container">
			<div className="cart-checkout-item-details">
				<img src={imageUrl} alt={`${name}`} />

				<span className="cart-checkout-name">{name}</span>

				<span className="cart-checkout-quantity-container">
					<button
						className="cart-checkout-chevron-btn"
						type="button"
						onClick={decrementProductQuantity}>
						<i className="fa fa-chevron-left"></i>
					</button>

					<span>{quantity}</span>

					<button
						className="cart-checkout-chevron-btn"
						type="button"
						onClick={incrementProductQuantity}>
						<i className="fa fa-chevron-right"></i>
					</button>
				</span>

				<span>${price}</span>
				<button className="cart-checkout-remove-button" onClick={removeProduct}>
					X
				</button>
			</div>
		</div>
	)
}

export default CartCheckOutItem
