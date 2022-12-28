import {Action, Reducer} from 'redux';
import {types} from "@/Redux/Reducers/Auth/action";
import {IAuth} from "@/Models/Model";

export interface Auth extends IAuth {
    isLogged: boolean
    isLoading: boolean
}

const defaultState: Auth = {
    isLogged: false,
    isLoading: false,
    token: null,
    type: null,
    expiresAt: null,
}

export const reducer: Reducer<Auth, { data: Partial<Auth> } & Action> = (state = defaultState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {...state, ...action.data};
        default:
            return state;
    }
}
