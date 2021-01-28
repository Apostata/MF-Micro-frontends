import {combineReducers} from 'redux';
import colorReducer from './colors.reducer';

export default {
    color: colorReducer
}

export const rootReducer =  combineReducers({
    color: colorReducer,
});