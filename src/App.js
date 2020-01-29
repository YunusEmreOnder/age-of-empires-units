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
      <div>
        <Router>
          <TopMenu />
          <Container className=" mt-4 mb-4">
            <Switch>
              <Route path="/units" component={Units} />
              <Route path="/unitDetails" component={UnitDetails} />
              <Route path="/" component={Home} />
              <Route render={() => <div>Not Found</div>} />
            </Switch>
          </Container>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  units: state.units
})

export default connect(mapStateToProps)(App);
