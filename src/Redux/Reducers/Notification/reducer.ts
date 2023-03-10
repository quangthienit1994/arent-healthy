import {Action, Reducer} from 'redux';
import {types} from "@/Redux/Reducers/Notification/action";
import {INotify} from "@/Models/Model";

export interface Notify {
    data: INotify[],
    isLoading?: boolean;
}

const defaultState = {
    data: [],
    isLoading: false,
}

export const reducer: Reducer<Notify, { data: INotify[], isLoading: boolean } & Action> = (state = defaultState, action) => {
    switch (action.type) {
        case types.FETCHING_NOTIFY_SUCCESS:
            return {...state, data: action.data, isLoading: false};
        case types.FETCHING_NOTIFY:
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    }
}
