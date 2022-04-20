import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMW from 'redux-promise';
import rootReducer from '../src/Redux/reducers/index';

import { BrowserRouter } from "react-router-dom";

// <Provider store={myStore}></Provider>
//const myStore = createStore(rootReducer);

const myStore = applyMiddleware(promiseMW)(createStore)

ReactDOM.render(
  <BrowserRouter>
  <Provider store={myStore(rootReducer)}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
