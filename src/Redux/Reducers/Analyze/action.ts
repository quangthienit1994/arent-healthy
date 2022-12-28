import {IAnalyze} from "@/Models/Model";

export const types = {
    FETCH_ANALYZE: Symbol("FETCH_ANALYZE"),
    FETCHING_ANALYZE: Symbol("FETCHING_ANALYZE"),
    FETCHING_ANALYZE_SUCCESS: Symbol("FETCHING_ANALYZE_SUCCESS"),
}

export const actions = {
    // saga
    load: () => ({type: types.FETCH_ANALYZE}),

    // redux
    loading: (isLoading: boolean = true) => ({type: types.FETCHING_ANALYZE, isLoading}),
    success: (data: IAnalyze[]) => ({type: types.FETCHING_ANALYZE_SUCCESS, data}),
};
