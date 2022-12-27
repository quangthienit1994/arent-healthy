import {Action, Reducer} from 'redux';
import {types} from "@/Redux/Reducers/Auth/action";

export interface Auth {
    isLogged: boolean
    isLoading: boolean
    token: string | null
    type: string | null
    expiresAt: string | null
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
