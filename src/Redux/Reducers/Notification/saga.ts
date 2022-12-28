import {call, put, takeLatest} from "redux-saga/effects";
import {actions, types} from "@/Redux/Reducers/Notification/action";
import {message} from "@/Redux/Reducers/Message/action";
import ApiService from "@/Services/ApiService";
import {INews} from "@/Models/Model";

function* onWatchFetchData() {
    yield put(actions.loading())
    try {
        const data: INews[] = yield call(ApiService.getNotify);
        yield put(actions.success(data))
    } catch (e: any) {
        yield put(message.addError({title: e.toString(), type: "error"}))
        yield put(actions.loading(false))
    }
}

export function* watchNotify() {
    yield takeLatest(types.FETCH_NOTIFY, onWatchFetchData);
}
