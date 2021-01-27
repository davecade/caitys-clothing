import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'

const Header = ({ currentUser }) => {
    
return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/">
                    Contact
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </div>
            
        </div>
        )
}


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);