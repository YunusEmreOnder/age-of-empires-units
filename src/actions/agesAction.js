
export const SET_ALL_FILTER = "SET_COST_FILTER"
export const SET_DARK_FILTER = "SET_DARK_FILTER"
export const SET_FEUDAL_FILTER = "SET_FEUDAL_FILTER"
export const SET_CASTLE_FILTER = "SET_CASTLE_FILTER"
export const SET_IMPERIAL_FILTER = "SET_IMPERIAL_FILTER"

function ageAllFilter(data = []) {
    return {
        type: SET_ALL_FILTER,
        payload: data
    }
} function ageDarkFilter(data = []) {
    return {
        type: SET_DARK_FILTER,
        payload: data
    }
} function ageFeudalFilter(data = []) {
    return {
        type: SET_FEUDAL_FILTER,
        payload: data
    }
} function ageCastleFilter(data = []) {
    return {
        type: SET_CASTLE_FILTER,
        payload: data
    }
} function ageImperialFilter(data = []) {
    return {
        type: SET_IMPERIAL_FILTER,
        payload: data
    }
}
export { ageAllFilter, ageDarkFilter, ageFeudalFilter, ageCastleFilter, ageImperialFilter }