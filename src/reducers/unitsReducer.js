import { GET_UNITS_SUCCESS } from '../actions/unitsAction'
function unitsReducer(state = [], { type, payload }) {
    switch (type) {
        case GET_UNITS_SUCCESS:
            return payload;
        default:
            return state;
    }
}
export default unitsReducer