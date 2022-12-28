import {call, put, takeLatest} from "redux-saga/effects";
import {actions, types} from "@/Redux/Reducers/News/action";
import {message} from "@/Redux/Reducers/Messages/action";
import ApiService from "@/Services/ApiService";
import {INews} from "@/Models/Model";

function* onWatchFetchData() {
    yield put(actions.loading())
    try {
        const data: INews[] = yield call(ApiService.getNews);
        yield put(actions.success(data))
    } catch (e: any) {
        yield put(message.addError({title: e.toString(), type: "error"}))
        yield put(actions.loading(false))
    }
}

export function* watchNews() {
    yield takeLatest(types.FETCH_NEWS, onWatchFetchData);
}
