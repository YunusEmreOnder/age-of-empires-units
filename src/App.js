import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'

import Home from './views/Home'
import TopMenu from './components/Navbar'
import Units from './views/Units'
import UnitDetails from './views/UnitDetails'

class App extends Component {
  render() {
    return (
        <Router>
          <TopMenu />
          <Container className=" mt-4 mb-4">
            <Switch>
              <Route path="/units" component={Units} />
              <Route path="/unitDetails/:id" component={UnitDetails} />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        </Router>
    )
  }
}

const mapStateToProps = state => ({
  units: state.units
})

export default connect(mapStateToProps)(App);
