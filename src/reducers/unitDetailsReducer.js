import { SET_UNIT_SUCCESS } from '../actions/unitDetailsAction'
function unitDetailsReducer(state = [], { type, payload }) {
    switch (type) {
        case SET_UNIT_SUCCESS:
            return payload;
        default:
            return state;
    }
}
export default unitDetailsReducer