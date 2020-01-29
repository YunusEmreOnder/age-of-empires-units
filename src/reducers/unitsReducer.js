import {FILTER_UNITS, GET_UNITS} from '../actions/unitsAction'
function unitsReducer(state =[], {type,payload} ){
    switch(type){
        case GET_UNITS:
            return payload;
            case FILTER_UNITS:
                return payload;
            default:
                return state;
    }
}
export default unitsReducer