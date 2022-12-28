import {call, put, takeLatest} from "redux-saga/effects";
import {actions, types} from "@/Redux/Reducers/Food/action";
import {message} from "@/Redux/Reducers/Messages/action";
import ApiService from "@/Services/ApiService";
import {IFood} from "@/Models/Model";

function* onWatchFetchData() {
    yield put(actions.loading())
    try {
        const data: IFood[] = yield call(ApiService.getFoods);
        yield put(actions.success(data))
    } catch (e: any) {
        yield put(message.addError({title: e.toString(), type: "error"}))
        yield put(actions.loading(false))
    }
}

export function* watchFood() {
    yield takeLatest(types.FETCH_FOOD, onWatchFetchData);
}
