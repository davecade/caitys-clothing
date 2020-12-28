import './App.css';
import React, { Fragment } from 'react';
import HomePage from './pages/homepage.component'
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
    <div>
      <h1>HATS PAGE</h1>
    </div>
)

function App() {
  return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </Fragment>
  )
}

export default App;
