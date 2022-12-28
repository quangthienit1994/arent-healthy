import {INotify} from "@/Models/Model";

export const types = {
    FETCH_NOTIFY: Symbol("FETCH_NOTIFY"),
    FETCHING_NOTIFY: Symbol("FETCHING_NOTIFY"),
    FETCHING_NOTIFY_SUCCESS: Symbol("FETCHING_NOTIFY_SUCCESS"),
}

export const actions = {
    // saga
    load: () => ({type: types.FETCH_NOTIFY}),

    // redux
    loading: (isLoading: boolean = true) => ({type: types.FETCHING_NOTIFY, isLoading}),
    success: (data: INotify[]) => ({type: types.FETCHING_NOTIFY_SUCCESS, data}),
};
