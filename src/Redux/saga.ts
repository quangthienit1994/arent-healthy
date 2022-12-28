import createSagaMiddleware from 'redux-saga';
import {all, fork} from 'redux-saga/effects';
import {watchAnalyze} from "@/Redux/Reducers/Analyze/saga";
import {watchFood} from "@/Redux/Reducers/Food/saga";
import {watchExercise} from "@/Redux/Reducers/Exercise/saga";
import {watchDiary} from "@/Redux/Reducers/Diaries/saga";
import {watchNews} from "@/Redux/Reducers/News/saga";
import {watchAuth} from "@/Redux/Reducers/Auth/saga";
import {REHYDRATE} from "redux-persist/es/constants";
import {take} from "lodash";

export const reduxSagaMiddleware = createSagaMiddleware()

export function* rootSagas() {
    yield take(REHYDRATE)

    yield all([
        fork(watchAuth),
        fork(watchAnalyze),
        fork(watchExercise),
        fork(watchDiary),
        fork(watchNews),
        fork(watchFood),
    ]);
}
