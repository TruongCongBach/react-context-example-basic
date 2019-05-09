import React              from 'react';
import ReactDOM           from 'react-dom';
import './index.css';
import App                from './App';
import * as serviceWorker from './serviceWorker';

import {Provider}                     from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {applyMiddleware}              from 'redux';
import {serviceCallAPILogin}          from "./serviceAPI";

const testStore = (state = {bachRuoiStore: 'asdasd'}, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("LOGIN_SUCCESS");
            return state;
        case "ERROR_GENERATED":
            console.log("ERROR_GENERATED");
            return state;
        default :
            return state;
    }

};

const middlewareCallAPILogin = (store) => next => action => {
    switch (action.type) {
        case 'LOGIN_PRO':
            return serviceCallAPILogin(action.credential).then((res) => {
                return next({
                    ...action,
                    res
                });
            });
        default :
            next({
                ...action
            })
    }
};

const middle = applyMiddleware(middlewareCallAPILogin);

const reducers = combineReducers({
    testStore, middle
});


const store = createStore(reducers);


ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
