import React from 'react';
import Home from './components/Home/Home'
import Units from './components/Units/Units'
import UnitDetails from './components/UnitDetails/UnitDetails'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { combineReducers, createStore } from 'redux';

function reducer() {
    return 'state'
}

const store = createStore(reducer)
console.log(store.getState())
function App() {
  return (
    <Router>
       <Link to="/">Home</Link>
       <Link to="/units">Units</Link>
       <Link to="/unitDetails">UnitDetails</Link>

       <Switch>
          <Route path="/units">
           <Units/>
          </Route>
          <Route path="/unitDetails">
          <UnitDetails/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
