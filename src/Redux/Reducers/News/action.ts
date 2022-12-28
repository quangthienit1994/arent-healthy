import {INews} from "@/Models/Model";

export const types = {
    FETCH_NEWS: Symbol("FETCH_NEWS"),
    FETCHING_NEWS: Symbol("FETCHING_NEWS"),
    FETCHING_NEWS_SUCCESS: Symbol("FETCHING_NEWS_SUCCESS"),
}

export const actions = {
    // saga
    load: () => ({type: types.FETCH_NEWS}),

    // redux
    loading: (isLoading: boolean = true) => ({type: types.FETCHING_NEWS, isLoading}),
    success: (data: INews[]) => ({type: types.FETCHING_NEWS_SUCCESS, data}),
};
