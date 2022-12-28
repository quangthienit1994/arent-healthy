import {Action, Reducer} from 'redux';
import {types} from "@/Redux/Reducers/Diaries/action";
import {IDiary} from "@/Models/Model";

export interface Diary {
    data: IDiary[],
    isLoading?: boolean;
}

const defaultState = {
    data: [],
    isLoading: false,
}

export const reducer: Reducer<Diary, { data: IDiary[], isLoading: boolean } & Action> = (state = defaultState, action) => {
    switch (action.type) {
        case types.FETCHING_DIARY_SUCCESS:
            return {...state, data: action.data, isLoading: false};
        case types.FETCHING_DIARY:
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    }
}
