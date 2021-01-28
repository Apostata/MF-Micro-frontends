import {types} from '../actionTypes';

const initialState =15;

export default (state=initialState, action) =>{
    switch(action.type){
        case types.SET_MEASURE :
            return action.payload;
        default :
            return state;
    }
};