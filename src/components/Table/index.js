import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { Redirect } from 'react-router';
import { costFilterData } from './costsFilter'
import { ageFilterData } from './ageFilter'
import { setUnitAction } from '../../actions/unitDetailsAction'
import './index.scss'

class TableList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      unitId: null
    }
  }
  setUnitData(unit) {
    this.setState({ redirect: true, unitId: unit.id });
    this.props.setUnite(unit)
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to={"/unitDetails/" + this.state.unitId} />;
    }
    const { units, costs, ages } = this.props
    let ageFilterList = ageFilterData.filter(units, ages)
    let filteredList = costFilterData.filter(ageFilterList, costs)
    return (
      <div>
        <Table bordered striped hover>
          <thead>
            <tr>
              <th>#id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((unit, index) => {
              const { id, name, age, cost } = unit;
              return (
                <tr key={id} onClick={event => this.setUnitData(unit)}>
                  <th>{id}</th>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>
                    {cost
                      ?
                      Object.entries(cost).map(([key, value]) => {
                        return `${key}: ${value}, `;
                      })
                      : ""}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  units: state.units,
  costs: state.costs,
  ages: state.ages
});
const mapDispatchToProps = {
  setUnite: setUnitAction,

};
export default connect(mapStateToProps, mapDispatchToProps)(TableList);
