import './App.scss';
import React, { useEffect, Fragment, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'
import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'

const HomePage = lazy (() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy (() => import('./pages/shop/shop.component'))
const contactPage = lazy (() => import('./pages/contact/contact.component'))
const Submited = lazy (() => import('./pages/submitted/submited.component'))
//const Header = lazy (() => import('./components/header/header.component'))
const SignInAndSignUp = lazy (() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const CheckoutPage = lazy (() => import('./pages/checkout/checkout.component'))


// -- Main App
const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <Fragment>
      <Header />
      <Switch>
        <ErrorBoundary >
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contact' component={contactPage} />
            <Route path='/submitted' component={Submited} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route path='/signin' render={() => currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp />)}/>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Fragment>
)
}

export default App;
