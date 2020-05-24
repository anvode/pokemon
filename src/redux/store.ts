import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './root-reducer';

const logMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

const middleWares = [thunk, logMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;

