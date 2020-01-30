import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import {costFilterData} from './costsFilter'
import {ageFilterData} from './ageFilter'

class TableList extends React.Component {
  componentDidMount() {
  }
  render() {
    const {units,costs,ages} =this.props

    let ageFilterList = ageFilterData.filter(units,ages)
    let filteredList = costFilterData.filter(ageFilterList,costs)
  return (
    <div>
      <Table bordered striped>
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
              <tr key={id}>
                <th>{id}</th>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                  {cost
                    ? //Object.keys(cost).map(e => {return cost + cost[e]}).join(",")
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
};};

const mapStateToProps = state => ({
  units: state.units,
  costs: state.costs,
  ages: state.ages
});
export default connect(mapStateToProps)(TableList);
