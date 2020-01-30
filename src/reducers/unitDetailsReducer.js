import {GET_UNIT} from '../actions/unitDetailsAction'
function unitDetailsReducer(state =[], {type,payload} ){
    switch(type){
        case GET_UNIT:
            return payload;
            default:
                return state;
    }
}
export default unitDetailsReducer