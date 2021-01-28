import {combineReducers} from 'redux';
import fontsReducer from './fonts.reducer';

export default {
    font: fontsReducer
}

export const rootReducer = combineReducers({
    font: fontsReducer
});