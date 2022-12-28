import {put, takeLatest} from "redux-saga/effects";
import {actions, types} from "@/Redux/Reducers/Auth/action";
import {message} from "@/Redux/Reducers/Message/action";

function* onWatchLogin() {
    yield put(actions.loading())
    try {
        yield put(actions.success({
            type: "bearer",
            token: "1234567889",
            expiresAt: null
        }))
    } catch (e: any) {
        yield put(message.addError({title: e.toString(), type: "error"}))
        yield put(actions.loading(false))
    }
}

export function* watchAuth() {
    yield takeLatest(types.LOGIN, onWatchLogin);
}
