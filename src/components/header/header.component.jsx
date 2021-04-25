import React from 'react';
import { Link } from 'react-router-dom';
//import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles'

//-- This is in the base app.js
const Header = ({ currentUser, hidden }) => {
    
return (
        <HeaderContainer >
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    Shop
                </OptionLink>
                <OptionLink to="/">
                    Contact
                </OptionLink>
                {
                    currentUser ?
                    <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
            
        </HeaderContainer>
        )
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);