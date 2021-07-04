import './App.css';
import React, { Component, Fragment } from 'react';
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect';
import { selectShopDataForPreview } from './redux/shop/shop.selector';
import { checkUserSession } from './redux/user/user.actions'


//-- Starting Transfer of user into Sagas

// -- Main App
class App extends Component {

  unsubscribeFromAuth = () => null;

  componentDidMount() {

    const { checkUserSession } = this.props
    checkUserSession()

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {

      return (
        <Fragment>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp />)}/>
          </Switch>
        </Fragment>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectShopDataForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
