import {SET_TITLE} from '../actions/pageTitleAction'
function pageTitleReducer(state =[], {type,payload} ){
    switch(type){
        case SET_TITLE:
            return payload;
            default:
                return state;
    }
}
export default pageTitleReducer