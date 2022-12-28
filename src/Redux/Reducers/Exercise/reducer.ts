import {Action, Reducer} from 'redux';
import {types} from "@/Redux/Reducers/Exercise/action";
import {IExercise} from "@/Models/Model";

export interface Exercise {
    data: IExercise[],
    isLoading?: boolean;
}

const defaultState = {
    data: [],
    isLoading: false,
}

export const reducer: Reducer<Exercise, { data: IExercise[], isLoading: boolean } & Action> = (state = defaultState, action) => {
    switch (action.type) {
        case types.FETCHING_EXERCISE_SUCCESS:
            return {...state, data: action.data, isLoading: false};
        case types.FETCHING_EXERCISE:
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    }
}
