import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./redux/sagas/rootSaga.js";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
))

saga.run(rootSaga)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById('root')
)