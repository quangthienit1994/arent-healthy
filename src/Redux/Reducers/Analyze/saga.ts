import {call, put, takeLatest} from "redux-saga/effects";
import {actions, types} from "@/Redux/Reducers/Analyze/action";
import {message} from "@/Redux/Reducers/Messages/action";
import ApiService from "@/Services/ApiService";
import {IAnalyze} from "@/Models/Model";

function* onWatchFetchData() {
    yield put(actions.loading())
    try {
        const data: IAnalyze[] = yield call(ApiService.getAnalyze);
        yield put(actions.success(data))
    } catch (e: any) {
        yield put(message.addError({title: e.toString(), type: "error"}))
    }
}

export function* watchAnalyze() {
    yield takeLatest(types.FETCH_ANALYZE, onWatchFetchData);
}
