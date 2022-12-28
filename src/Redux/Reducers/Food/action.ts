import {IFood} from "@/Models/Model";

export const types = {
    FETCH_FOOD: Symbol("FETCH_FOOD"),
    FETCHING_FOOD: Symbol("FETCHING_FOOD"),
    FETCHING_FOOD_SUCCESS: Symbol("FETCHING_FOOD_SUCCESS"),
}

export const actions = {
    // saga
    load: () => ({type: types.FETCH_FOOD}),

    // redux
    loading: (isLoading: boolean = true) => ({type: types.FETCHING_FOOD, isLoading}),
    success: (data: IFood[]) => ({type: types.FETCHING_FOOD_SUCCESS, data}),
};
