import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"

import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"

import { UserContext } from "../../../context/user.context"
import { CartContext } from "../../../context/cart.context"

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg"
import { signOutUser } from "../../../utils/firebase/firebase.utils"

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles"


const Navigation = () => {
	const { currentUser } = useContext(UserContext)
	const { visibility } = useContext(CartContext)

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<CrwnLogo className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">
						Shop
					</NavLink>

					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/auth">
							Sign in
						</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{visibility && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	)
}

export default Navigation
