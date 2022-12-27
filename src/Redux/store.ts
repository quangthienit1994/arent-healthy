import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import reducers from './reducers';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Persistor} from "redux-persist/es/types";

const persistedReducer = persistReducer({
    key: 'Healthy',
    storage: storage,
    blacklist: ['profile']
}, combineReducers(reducers));

const composeEnhancers = composeWithDevTools({
    serialize: true
});

const rootReducer = (state: any, action: any) => {
    return persistedReducer(state, action)
}

export default function initStore() {
    const store: any = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(),
        ),
    );
    const persistor = persistStore(store);
    return {store, persistor};
}

export const {store, persistor}: { store: Store; persistor: Persistor } = initStore();
