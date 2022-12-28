import {call, put, takeLatest} from "redux-saga/effects";
import {actions, types} from "@/Redux/Reducers/Diaries/action";
import {message} from "@/Redux/Reducers/Messages/action";
import ApiService from "@/Services/ApiService";
import {IDiary} from "@/Models/Model";

function* onWatchFetchData() {
    yield put(actions.loading())
    try {
        const data: IDiary[] = yield call(ApiService.getDiaries);
        yield put(actions.success(data))
    } catch (e: any) {
        yield put(message.addError({title: e.toString(), type: "error"}))
        yield put(actions.loading(false))
    }
}

export function* watchDiary() {
    yield takeLatest(types.FETCH_DIARY, onWatchFetchData);
}
