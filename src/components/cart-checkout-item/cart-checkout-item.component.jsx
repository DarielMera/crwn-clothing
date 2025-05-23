import { useContext } from "react"

import { CartContext } from "../../context/cart.context"

import {
	CartCheckOutItemContainer, 
	CartCheckOutItemDetails, 
	CartCheckOutItemImg,
	CartCheckOutQuantityContainer,
	CartCheckOutName,
	CartCheckOutQuantity,
	CartCheckOutItemChevronButton,
	CartCheckOutRemoveButton
} from "./cart-checkout-item.styles"

const CartCheckOutItem = ({ cartItem }) => {
	const { id, name, imageUrl, price, quantity } = cartItem

	const { incrementQuantity, decrementQuantity, removeProductFromCheckout } =
		useContext(CartContext)

	const incrementProductQuantity = () => incrementQuantity(id)

	const decrementProductQuantity = () => decrementQuantity(id)

	const removeProduct = () => removeProductFromCheckout(id)

	return (
		<CartCheckOutItemContainer>
			<CartCheckOutItemDetails>
				<CartCheckOutItemImg src={imageUrl} alt={`${name}`} />

				<CartCheckOutName>{name}</CartCheckOutName>

				<CartCheckOutQuantityContainer>
					<CartCheckOutItemChevronButton
						type="button"
						onClick={decrementProductQuantity}>
						<i className="fa fa-chevron-left"></i>
					</CartCheckOutItemChevronButton>

					<CartCheckOutQuantity>{quantity}</CartCheckOutQuantity>

					<CartCheckOutItemChevronButton
						type="button"
						onClick={incrementProductQuantity}>
						<i className="fa fa-chevron-right"></i>
					</CartCheckOutItemChevronButton>
				</CartCheckOutQuantityContainer>

				<span>${price}</span>
				<CartCheckOutRemoveButton onClick={removeProduct}>
					X
				</CartCheckOutRemoveButton>
			</CartCheckOutItemDetails>
		</CartCheckOutItemContainer>
	)
}

export default CartCheckOutItem
