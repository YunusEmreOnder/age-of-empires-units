import React, { Component } from 'react';
import { connect } from 'react-redux'
import TableList from '../../components/Table'
import SliderFilter from '../../components/Slider'
import AgesFilter from '../../components/Ages'
import { getUnits } from '../../actions/unitsAction'
import { costFilter } from '../../actions/costsAction'
import { pageTitle } from '../../actions/pageTitleAction'
import * as unitsData from '../../resources/units.json'
import 'react-input-range/lib/css/index.css';
import './index.scss';
const unitsList = unitsData.units
class Units extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  } 
  componentDidMount() {
    this.props.getUnitsData(unitsList)
    this.props.setPageTitle('Units Page')
  }
  render() {
    return (
      <div className="units">
        {/* <button onClick={this.updateData}>updateData</button> */}
        <AgesFilter/>
        <SliderFilter/>
        <TableList />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  units: state.units,
  costs:state.costs
})
const mapDispatchToProps = {
  getUnitsData: getUnits,
  setCostFilter: costFilter,
  setPageTitle: pageTitle

};
export default connect(mapStateToProps, mapDispatchToProps)(Units);