import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById('root')
)