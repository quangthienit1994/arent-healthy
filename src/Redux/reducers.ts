import {Auth, reducer as authReducer} from "@/Redux/Reducers/Auth/reducer";
import {Analyze, reducer as analyzeReducer} from "@/Redux/Reducers/Analyze/reducer";
import {Food, reducer as foodReducer} from "@/Redux/Reducers/Food/reducer";

export interface Reducers {
    auth: Auth,
    food: Food,
    analyze: Analyze
}

const reducers = {
    auth: authReducer,
    food: foodReducer,
    analyze: analyzeReducer
};

export default reducers;
