import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import reducers from './reducers';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Persistor} from "redux-persist/es/types";
import {reduxSagaMiddleware, rootSagas} from "@/Redux/saga";

const persistedReducer = persistReducer({
    key: 'Healthy',
    storage: storage,
    blacklist: []
}, combineReducers(reducers));

const composeEnhancers = composeWithDevTools({
    serialize: true
});

export default function initStore() {
    const store: any = createStore(
        persistedReducer,
        composeEnhancers(
            applyMiddleware(
                reduxSagaMiddleware,
            ),
        ),
    );
    const persistor = persistStore(store);
    reduxSagaMiddleware.run(rootSagas);
    return {store, persistor};
}

export const {store, persistor}: { store: Store; persistor: Persistor } = initStore();
