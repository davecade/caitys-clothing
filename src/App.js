import './App.css';
import React, { Fragment } from 'react';
import HomePage from './pages/homepage.component'
import { Switch, Route } from 'react-router-dom';
import ShopPage from './shop/shop.component'
import Header from './components/header/header.component'

const HatsPage = () => (
    <div>
      <h1>HATS PAGE</h1>
    </div>
)

function App() {
  return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </Fragment>
  )
}

export default App;
