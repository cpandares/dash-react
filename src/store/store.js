import thunk from 'redux-thunk';

import  { createStore, combineReducers, compose, applyMiddleware}  from 'redux';

import { AuthReducer } from '../reducers/AuthReducer';
import { UserReducer } from '../reducers/UserReducer';

import { insuranceReducer } from '../reducers/InsuranceReducer';
import { VehicleReducer } from '../reducers/VehicleReducer';
import { DependentReducer } from '../reducers/DependentReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({

    auth: AuthReducer,
    user: UserReducer,
    vehicles: VehicleReducer,
    insurance: insuranceReducer,
    dependents: DependentReducer

})

export const store = createStore(reducers ,  composeEnhancers(
    applyMiddleware( thunk )
))