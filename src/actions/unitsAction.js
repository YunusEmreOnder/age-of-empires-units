export const GET_UNITS = "GET_UNITS"
export const GET_UNITS_SUCCESS = "GET_UNITS_SUCCESS"
function getUnits(data = []) {
    return {
        type: GET_UNITS,
        payload: data
    }
}

export {getUnits}