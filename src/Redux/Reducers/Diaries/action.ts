import {IDiary} from "@/Models/Model";

export const types = {
    FETCH_DIARY: Symbol("FETCH_DIARY"),
    FETCHING_DIARY: Symbol("FETCHING_DIARY"),
    FETCHING_DIARY_SUCCESS: Symbol("FETCHING_DIARY_SUCCESS"),
}

export const actions = {
    // saga
    load: () => ({type: types.FETCH_DIARY}),

    // redux
    loading: (isLoading: boolean = true) => ({type: types.FETCHING_DIARY, isLoading}),
    success: (data: IDiary[]) => ({type: types.FETCHING_DIARY_SUCCESS, data}),
};
