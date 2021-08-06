import React from 'react';
import { ReactComponent as Logo} from '../../assets/cat.svg'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles'
import { signOutStart } from '../../redux/user/user.actions'
import './header.styles.scss'

//-- This is in the base app.js
const Header = ({ currentUser, hidden, signOutStart }) => {

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
                        <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);