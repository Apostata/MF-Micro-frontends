import {createStore, applyMiddleware, compose} from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './reducers';
const middlewares = [Thunk];
const composeEnhancers =  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose : compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;



