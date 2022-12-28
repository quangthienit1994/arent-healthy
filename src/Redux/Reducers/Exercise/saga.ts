import {call, put, takeLatest} from "redux-saga/effects";
import {actions, types} from "@/Redux/Reducers/Exercise/action";
import {message} from "@/Redux/Reducers/Messages/action";
import ApiService from "@/Services/ApiService";
import {IExercise} from "@/Models/Model";

function* onWatchFetchData() {
    yield put(actions.loading())
    try {
        const data: IExercise[] = yield call(ApiService.getExercises);
        yield put(actions.success(data))
    } catch (e: any) {
        yield put(message.addError({title: e.toString(), type: "error"}))
        yield put(actions.loading(false))
    }
}

export function* watchExercise() {
    yield takeLatest(types.FETCH_EXERCISE, onWatchFetchData);
}
