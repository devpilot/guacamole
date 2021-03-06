import React from 'react';
import ReactDOM from 'react-dom';
import { DBConfig } from './DBConfig';
import { initDB } from 'react-indexed-db';
import './index.css';
import App from './App';
import AuthProvider from './contexts/AuthContext';
// import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import store from "./store";

initDB(DBConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider>
    <App />
    </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
