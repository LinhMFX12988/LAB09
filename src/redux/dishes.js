import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
        isLoading: true,
        errmess: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errmess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:

        default:
            return state;
    }
}