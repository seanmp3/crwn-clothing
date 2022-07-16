import {Outlet, Link} from "react-router-dom"
import {Fragment, useContext} from "react"

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import CartIcon from "../../components/cartIcon"
import CartDropdown from "../../components/cartDropdown"

import {UserContext} from "../../contexts/user"
import {CartContext} from "../../contexts/cart"

import {signOutUser} from "../../utils/firebase"

import "../../styles/navigation.scss"

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
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
            <span className="nav-link" onClick={signOutUser}>Sign Out</span>
          ):(
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
