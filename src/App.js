import './App.scss';
import React, { useEffect, Fragment, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component'
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect';
import { selectShopDataForPreview } from './redux/shop/shop.selector';
import { checkUserSession } from './redux/user/user.actions'
import Spinner from './components/spinner/spinner.component'

const HomePage = lazy (() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy (() => import('./pages/shop/shop.component'))
const contactPage = lazy (() => import('./pages/contact/contact.component'))
const Submited = lazy (() => import('./pages/submitted/submited.component'))
//const Header = lazy (() => import('./components/header/header.component'))
const SignInAndSignUp = lazy (() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const CheckoutPage = lazy (() => import('./pages/checkout/checkout.component'))


// -- Main App
const App = ({ checkUserSession, currentUser }) => {

  useEffect(()=>{
    checkUserSession()
  }, [checkUserSession])

  return (
    <Fragment>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={contactPage} />
          <Route path='/submitted' component={Submited} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin' render={() => currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp />)}/>
        </Suspense>
      </Switch>
    </Fragment>
)
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectShopDataForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
