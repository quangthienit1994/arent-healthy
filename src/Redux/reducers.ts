import {Auth, reducer as authReducer} from "@/Redux/Reducers/Auth/reducer";

export interface Reducers {
    auth: Auth
}

const reducers = {
    auth: authReducer
};

export default reducers;
