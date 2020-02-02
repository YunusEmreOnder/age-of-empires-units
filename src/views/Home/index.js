import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pageTitle } from '../../actions/pageTitleAction'
import main from '../../assets/images/main.jpg';
class Home extends Component {
  componentDidMount() {
    this.props.setPageTitle('Home')
  }
  render() {
    return (
      <div>
        <img src={main} alt="Main" className="img-fluid" />
      </div>
    )
  }
}
const mapDispatchToProps = {
  setPageTitle: pageTitle
};
export default connect(null, mapDispatchToProps)(Home);