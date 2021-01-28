import {combineReducers} from 'redux';
import measureReducer from './measures.reducer';
import Fontsreducers from 'Fonts/reducers'
import Colorsreducers from 'Colors/reducers'
export default combineReducers({
    ...Fontsreducers,
    ...Colorsreducers,
    measure: measureReducer,
});