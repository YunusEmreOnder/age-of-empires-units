import React from 'react'; 
import {connect} from 'react-redux'
import { Table } from 'reactstrap';

const TableList = (props) => {
    console.warn(props.units)
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
          {
props.units.map((unit,index)=>{
    const {id,name,age,cost} = unit
    return (
<tr  key={id}>
          <th>{id}</th>
          <td>{name}</td>
          <td>{age}</td>
          <td>
          {cost ? (
        //Object.keys(cost).map(e => {return cost + cost[e]}).join(",")
        Object.entries(cost).map(([key, value]) => {return `${key}: ${value}, `})
      ) : (
        ''
      )}

          </td>
        </tr>

    )
})

          
        
        }
      </tbody>
    </Table>
      </div>
    );
  }
  
const mapStateToProps = state => ({
    units:state.units
 })
 export default connect(mapStateToProps)(TableList);