import {IExercise} from "@/Models/Model";

export const types = {
    FETCH_EXERCISE: Symbol("FETCH_EXERCISE"),
    FETCHING_EXERCISE: Symbol("FETCHING_EXERCISE"),
    FETCHING_EXERCISE_SUCCESS: Symbol("FETCHING_EXERCISE_SUCCESS"),
}

export const actions = {
    // saga
    load: () => ({type: types.FETCH_EXERCISE}),

    // redux
    loading: (isLoading: boolean = true) => ({type: types.FETCHING_EXERCISE, isLoading}),
    success: (data: IExercise[]) => ({type: types.FETCHING_EXERCISE_SUCCESS, data}),
};
