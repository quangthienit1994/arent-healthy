import 'react-hot-loader'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@/Scss/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loading from "@/Shareds/Loading";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persistor, store} from "@/Redux/store";
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <React.Suspense fallback={<Loading/>}>
          <BrowserRouter>
              <Provider store={store}>
                  <PersistGate loading={null} persistor={persistor}>
                      <App />
                  </PersistGate>
              </Provider>
          </BrowserRouter>
      </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
