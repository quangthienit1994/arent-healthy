import {Auth} from "@/Redux/Reducers/Auth/reducer";

export const types = {
    LOGIN: Symbol("LOGIN"),
    LOGOUT: Symbol("LOGOUT"),
    LOGGED_SUCCESS: Symbol("LOGGED_SUCCESS"),
    IS_LOGIN: Symbol("IS_LOGIN"),
}

export const actions = {
    // saga
    login: () => ({type: types.LOGIN}),

    // redux
    success: (data: Pick<Auth, 'token' | 'type' | 'expiresAt'>) => ({type: types.LOGGED_SUCCESS, data}),
    loading: (isLoading: boolean = true) => ({type: types.IS_LOGIN, isLoading}),
    logout: () => ({type: types.LOGOUT}),
};
