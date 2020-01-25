import React from 'react';
import Home from './views/Home'
import TopMenu from './components/Navbar'
import Units from './views/Units'
import UnitDetails from './views/UnitDetails'
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from 'redux';

function reducer() {
    return 'state'
}

const store = createStore(reducer)
console.log(store.getState())
function App() {
  return (
    <div>

    <Router>
    <TopMenu/>
    <div className='container'>

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
        </div>

   </Router>
   </div> 
  );
}

export default App;
