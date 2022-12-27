import {Auth} from "@/Redux/Reducers/Auth/reducer";

export const types = {
    LOGIN: Symbol("LOGIN"),
    LOGOUT: Symbol("LOGOUT"),
}

export const actions = {
    login: (data: Pick<Auth, 'token' | 'type' | 'expiresAt'>) => ({type: types.LOGIN, data}),
    logout: () => ({type: types.LOGOUT})
};
