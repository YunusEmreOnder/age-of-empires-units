import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import TableList from '../../components/Table'
import SliderFilter from '../../components/Slider'
import AgesFilter from '../../components/Ages'
import { getUnits } from '../../actions/unitsAction'
import { costFilter } from '../../actions/costsAction'
import { pageTitle } from '../../actions/pageTitleAction'
import 'react-input-range/lib/css/index.css';
import './index.scss';
class Units extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.getUnitsData()
    this.props.setPageTitle('Units Page')
  }
  render() {
    return (
      <div className="units">
        {/* <button onClick={this.updateData}>updateData</button> */}
        <AgesFilter />
        <SliderFilter />
        <TableList />
      </div>
    );
  }
}

Units.propTypes = {
  units: PropTypes.array.isRequired,
  costs: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  units: state.units,
  costs: state.costs
})
const mapDispatchToProps = {
  getUnitsData: getUnits,
  setCostFilter: costFilter,
  setPageTitle: pageTitle

};
export default connect(mapStateToProps, mapDispatchToProps)(Units);