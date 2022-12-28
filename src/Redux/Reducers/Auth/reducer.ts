import {Action, Reducer} from 'redux';
import {types} from "@/Redux/Reducers/Auth/action";
import {IAuth} from "@/Models/Model";

export interface Auth extends IAuth {
    isLogged: boolean
    isLoading: boolean
    error: any
}

const defaultState: Auth = {
    isLogged: false,
    isLoading: false,
    error: null,
    token: null,
    type: null,
    expiresAt: null,
}

export const reducer: Reducer<Auth, { data: Partial<Auth>; isLoading: boolean } & Action> = (state = {...defaultState}, action) => {
    switch (action.type) {
        case types.LOGGED_SUCCESS:
            return {...state, ...action.data, isLogged: true, isLoading: false};
        case types.IS_LOGIN:
            return {...state, isLoading: action.isLoading};
        case types.LOGOUT:
            return {...defaultState};
        default:
            return state;
    }
}
