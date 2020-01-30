import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CustomInput, Row, Col } from 'reactstrap';
import InputRange from 'react-input-range';
import { costFilter, woodFilter, foodFilter, goldFilter, activeWoodCost, activeFoodCost, activeGoldCost } from '../../actions/costsAction'

class SliderFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { costs, setWoodFilter, setFoodFilter, setGoldFilter,setActiveWoodCost,setActiveFoodCost, setActiveGoldCost  } = this.props;
        return (
            <div>
                <h3 className="mt-3">Costs</h3>
                <Row>
                    <Col>
                        <div className="d-flex mb-4">
                            <CustomInput checked={costs.status.wood} onChange={event => setActiveWoodCost(event.target.checked)} type="checkbox" id="woodCheck" label="Wood" className="costCheckbox" />
                            <InputRange
                                maxValue={200}
                                minValue={0}
                                disabled={!costs.status.wood}
                                value={costs.wood}
                                onChange={value => setWoodFilter(value)} />
                        </div>
                        <div className="d-flex mb-4">
                            <CustomInput checked={costs.status.food} onChange={event => setActiveFoodCost(event.target.checked)} type="checkbox" id="foodCheck" label="Food" className="costCheckbox" />
                            <InputRange
                                className="mt-2"
                                maxValue={200}
                                minValue={0}
                                disabled={!costs.status.food}
                                value={costs.food}
                                onChange={value => setFoodFilter(value)} />
                        </div>
                        <div className="d-flex mb-4">
                            <CustomInput checked={costs.status.gold} onChange={event => setActiveGoldCost(event.target.checked)} type="checkbox" id="goldCheck" label="Gold" className="costCheckbox" />
                            <InputRange
                                className="mt-2"
                                maxValue={200}
                                minValue={0}
                                disabled={!costs.status.gold}
                                value={costs.gold}
                                onChange={value => setGoldFilter(value)} />
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    units: state.units,
    costs: state.costs
})
const mapDispatchToProps = {
    setCostFilter: costFilter,
    setWoodFilter: woodFilter,
    setFoodFilter: foodFilter,
    setGoldFilter: goldFilter,
    setActiveWoodCost: activeWoodCost,
    setActiveFoodCost: activeFoodCost,
    setActiveGoldCost: activeGoldCost,
};
export default connect(mapStateToProps, mapDispatchToProps)(SliderFilter);