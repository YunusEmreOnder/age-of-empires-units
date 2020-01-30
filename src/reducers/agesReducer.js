import {
    SET_ALL_FILTER,
    SET_DARK_FILTER,
    SET_FEUDAL_FILTER,
    SET_CASTLE_FILTER,
    SET_IMPERIAL_FILTER,
} from '../actions/agesAction'

export const initialState = {
    all: true,
    dark: false,
    feudal: false,
    castle: false,
    imperial: false,
}
function agesReducer(state = initialState, { type, payload }) {
    console.log(payload)
    switch (type) {
        case SET_ALL_FILTER:
            return {
                all: payload,
                dark: false,
                feudal: false,
                castle: false,
                imperial: false,
            }
        case SET_DARK_FILTER:
            return {
                all: false,
                dark: payload,
                feudal: false,
                castle: false,
                imperial: false,
            }
        case SET_FEUDAL_FILTER:
            return {
                all: false,
                dark: false,
                feudal: payload,
                castle: false,
                imperial: false,
            }
        case SET_CASTLE_FILTER:
            return {
                all: false,
                dark: false,
                feudal: false,
                castle: payload,
                imperial: false,
            }
        case SET_IMPERIAL_FILTER:
            return {
                all: false,
                dark: false,
                feudal: false,
                castle: false,
                imperial: payload,
            }
        default:
            return state;
    }
}
export default agesReducer