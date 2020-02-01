import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from "reactstrap";
import { pageTitle } from '../../actions/pageTitleAction'
import { setUnitAction } from '../../actions/unitDetailsAction'
import * as unitsData from '../../resources/units.json'
const unitsList = unitsData.units
class UnitDetails extends Component {
  componentDidMount() {
    const { match, setUnite, setPageTitle } = this.props;
    const unit = unitsList.find(e => e.id === Number(match.params.id))
    setPageTitle('Unit Detail Page')
    setUnite(unit)
  }
  render() {
    const { unit } = this.props
    const { cost } = unit
    return (
      <div>
        <Table bordered striped size="sm">
          <tbody>
            <tr>
              <td>#ID</td>
              <td>{unit.id}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{unit.name}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{unit.description}</td>
            </tr>
            <tr>
              <td>Min. Required Age:</td>
              <td>{unit.age}</td>
            </tr>
            {cost
              ?
              Object.entries(cost).map(([key, value],index) => {
                return (<tr key={index}>
                  <td>{key} Cost:</td>
                  <td>{value}</td>
                </tr>);
              })
              : null} 
            <tr>
              <td>Build Time:</td>
              <td>{unit.build_time}</td>
            </tr>
            <tr>
              <td>Reload Time:</td>
              <td>{unit.reload_time}</td>
            </tr>
            <tr>
              <td>Hit Points:</td>
              <td>{unit.hit_points}</td>
            </tr>
            <tr>
              <td>Attack:</td>
              <td>{unit.attack}</td>
            </tr>
            <tr>
              <td>Accuracy:</td>
              <td>{unit.accuracy}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  units: state.units,
  unit: state.unitDetails
})
const mapDispatchToProps = {
  setPageTitle: pageTitle,
  setUnite: setUnitAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitDetails);
