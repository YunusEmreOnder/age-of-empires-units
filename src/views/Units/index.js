import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Button, ButtonGroup  } from 'reactstrap';
import InputRange from 'react-input-range';
import TableList from '../../components/Table'
import {filterUnits,getUnits} from '../../actions/units'
import 'react-input-range/lib/css/index.css'; 
import * as unitsData from '../../resources/units.json'
const unitsList = unitsData.units
class Units extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: { min: 2, max: 10 },
    };
  }
  updateData(){
		this.props.updateData('Test');
  }
  componentDidMount(){
    this.props.getUnitsData(unitsList)
  }
  render(){
    console.log(this.props)
    return (
      <div>
      {/* <button onClick={this.updateData}>updateData</button> */}
        <h3>Ages</h3>
        <ButtonGroup>
          <Button color="primary" active={true}>All</Button>
          <Button color="primary">Dark</Button>
          <Button color="primary">Fedual</Button>
          <Button color="primary">Castle</Button>
          <Button color="primary">Imperial</Button>
        </ButtonGroup>
        <h3>Costs</h3>

        <InputRange
        maxValue={200}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
        <TableList/>
     </div>
    );
  }
}


const mapStateToProps = state => ({
  units:state.units
})
const mapDispatchToProps  = {
  updateData: filterUnits,
  getUnitsData:getUnits,
};
export default connect(mapStateToProps, mapDispatchToProps)(Units);