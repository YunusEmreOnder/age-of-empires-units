
export const SET_COST_FILTER = "SET_COST_FILTER"
export const SET_WOOD_FILTER = "SET_WOOD_FILTER"
export const SET_FOOD_FILTER = "SET_FOOD_FILTER"
export const SET_GOLD_FILTER = "SET_GOLD_FILTER"
export const SET_ACTIVE_COST = "SET_ACTIVE_COST"
export const SET_ACTIVE_WOOD_COST = "SET_ACTIVE_WOOD_COST"
export const SET_ACTIVE_FOOD_COST = "SET_ACTIVE_FOOD_COST"
export const SET_ACTIVE_GOLD_COST = "SET_ACTIVE_GOLD_COST"
function costFilter(data = []) {
    return {
        type: SET_COST_FILTER,
        payload: data
    }
}
function woodFilter(data = []) {
    return {
        type: SET_WOOD_FILTER,
        payload: data
    }
}
function foodFilter(data = []) {
    return {
        type: SET_FOOD_FILTER,
        payload: data
    }
}
function goldFilter(data = []) {
    return {
        type: SET_GOLD_FILTER,
        payload: data
    }
}
function activeWoodCost(data = []) {
    return {
        type: SET_ACTIVE_WOOD_COST,
        payload: data
    }
}
function activeFoodCost(data = []) {
    return {
        type: SET_ACTIVE_FOOD_COST,
        payload: data
    }
}
function activeGoldCost(data = []) {
    return {
        type: SET_ACTIVE_GOLD_COST,
        payload: data
    }
}

export { costFilter, woodFilter, foodFilter, goldFilter,activeWoodCost,activeFoodCost,activeGoldCost, }