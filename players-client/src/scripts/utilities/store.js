import {createStore,applyMiddleware,combineReducers} from 'redux';
import {createLogger} from 'redux-logger';

export default createStore(combineReducers({}),
                           {},
                           applyMiddleware(createLogger()));