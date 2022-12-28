import {Action, Reducer} from 'redux';
import {types} from "@/Redux/Reducers/Food/action";
import {IFood} from "@/Models/Model";

export interface Food {
    data: IFood[],
    isLoading?: boolean;
}

const defaultState = {
    data: [],
    isLoading: false,
}

export const reducer: Reducer<Food, { data: IFood[] } & Action> = (state = defaultState, action) => {
    switch (action.type) {
        case types.FETCHING_FOOD_SUCCESS:
            return {...state, data: action.data, isLoading: false};
        case types.FETCHING_FOOD:
            return {...state, isLoading: true};
        default:
            return state;
    }
}
