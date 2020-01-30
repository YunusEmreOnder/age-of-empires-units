import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'reactstrap';
import { ageAllFilter, ageDarkFilter, ageFeudalFilter, ageCastleFilter, ageImperialFilter } from '../../actions/agesAction'
class AgesFilter extends Component {
    render() {
        const { ages, setAgeAllFilter, setAgeDarkFilter, setAgeFeudalFilter, setAgeCastleFilter, setAgeImperialFilter } = this.props
        return (
            <div>
                <ButtonGroup>
                    <Button onClick={() => setAgeAllFilter(true)} color="primary" active={ages.all}>All</Button>
                    <Button onClick={() => setAgeDarkFilter(true)} color="primary" active={ages.dark}>Dark</Button>
                    <Button onClick={() => setAgeFeudalFilter(true)} color="primary" active={ages.feudal}>Feudal</Button>
                    <Button onClick={() => setAgeCastleFilter(true)} color="primary" active={ages.castle}>Castle</Button>
                    <Button onClick={() => setAgeImperialFilter(true)} color="primary" active={ages.imperial}>Imperial</Button>
                </ButtonGroup>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    ages: state.ages
})
const mapDispatchToProps = {
    setAgeAllFilter: ageAllFilter,
    setAgeDarkFilter: ageDarkFilter,
    setAgeFeudalFilter: ageFeudalFilter,
    setAgeCastleFilter: ageCastleFilter,
    setAgeImperialFilter: ageImperialFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(AgesFilter);