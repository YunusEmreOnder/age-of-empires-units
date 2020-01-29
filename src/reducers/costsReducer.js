import { SET_WOOD_FILTER, SET_FOOD_FILTER, SET_GOLD_FILTER, SET_ACTIVE_WOOD_COST, SET_ACTIVE_FOOD_COST, SET_ACTIVE_GOLD_COST } from '../actions/costsAction'

export const initialState = {
    wood: { min: 0, max: 20 },
    food: { min: 1, max: 50 },
    gold: { min: 50, max: 100 },
    status: {
        wood: true,
        food: true,
        gold: true,
    }
}
function costsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_WOOD_FILTER:
            return {
                ...state,
                wood: payload
            }
        case SET_FOOD_FILTER:
            return {
                ...state,
                food: payload
            }
        case SET_GOLD_FILTER:
            return {
                ...state,
                gold: payload
            }
        case SET_ACTIVE_WOOD_COST:
            return Object.assign({}, state, {
                status: {
                    ...state.status,
                    wood: payload
                }
            })
        case SET_ACTIVE_FOOD_COST:
            return Object.assign({}, state, {
                status: {
                    ...state.status,
                    food: payload
                }
            })
        case SET_ACTIVE_GOLD_COST:
            return Object.assign({}, state, {
                status: {
                    ...state.status,
                    gold: payload
                }
            })
        default:
            return state;
    }
}
export default costsReducer