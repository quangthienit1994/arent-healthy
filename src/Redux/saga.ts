import createSagaMiddleware from 'redux-saga';
import {all, fork} from 'redux-saga/effects';
import {watchAnalyze} from "@/Redux/Reducers/Analyze/saga";
import {watchFood} from "@/Redux/Reducers/Food/saga";

export const reduxSagaMiddleware = createSagaMiddleware()

export function* rootSagas() {
    yield all([
        fork(watchAnalyze),
        fork(watchFood)
    ]);
}
