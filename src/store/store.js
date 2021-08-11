import thunk from 'redux-thunk';

import  { createStore, combineReducers, compose, applyMiddleware}  from 'redux';

import { AuthReducer } from '../reducers/AuthReducer';
import { UserReducer } from '../reducers/UserReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({

    auth: AuthReducer,
    user: UserReducer

})

export const store = createStore(reducers ,  composeEnhancers(
    applyMiddleware( thunk )
))