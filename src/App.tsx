import React from 'react';
import {hot} from 'react-hot-loader/root';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from "@/Redux/store";
import Loading from "@/Shareds/Loading";

function App() {
    return (
        <React.Suspense fallback={<Loading/>}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                </PersistGate>
            </Provider>
        </React.Suspense>
    );
}

export default hot(App);
