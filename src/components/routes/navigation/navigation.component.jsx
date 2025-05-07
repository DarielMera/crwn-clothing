import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import CartIcon from "../../cart-icon/cart-icon.component"
import CartDropdown from "../../cart-dropdown/cart-dropdown.component"

import { UserContext } from "../../../context/user.context"
import { DropdownContext } from "../../../context/dropdown.context"

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg"
import { signOutUser } from "../../../utils/firebase/firebase.utils"

import "./navigation.styles.scss"

const Navigation = () => {
	const { currentUser } = useContext(UserContext)
	const { visibility } = useContext(DropdownContext)

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrwnLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>

					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							Sign in
						</Link>
					)}
					<CartIcon />
				</div>
				{visibility && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation
