import React, { Component } from 'react';
import { connect } from 'react-redux'
import TableList from '../../components/Table'
import SliderFilter from '../../components/Slider'
import AgesFilter from '../../components/Ages'
import { getUnits } from '../../actions/unitsAction'
import { costFilter } from '../../actions/costsAction'
import 'react-input-range/lib/css/index.css';
import * as unitsData from '../../resources/units.json'
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
  }

  render() {
    return (
      <div className="units">
        {/* <button onClick={this.updateData}>updateData</button> */}
        <h3>Ages</h3>
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Units);