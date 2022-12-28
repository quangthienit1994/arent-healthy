import {Action, Reducer} from 'redux';
import {types} from "@/Redux/Reducers/Analyze/action";
import { IAnalyze } from '@/Models/Model';

export interface Analyze {
    data: IAnalyze[],
    isLoading?: boolean;
}

const defaultState = {
    data: [],
    isLoading: false,
}

export const reducer: Reducer<Analyze, { data: IAnalyze[], isLoading: boolean } & Action> = (state = defaultState, action) => {
    switch (action.type) {
        case types.FETCHING_ANALYZE_SUCCESS:
            return {...state, data: action.data, isLoading: false};
        case types.FETCHING_ANALYZE:
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    }
}
