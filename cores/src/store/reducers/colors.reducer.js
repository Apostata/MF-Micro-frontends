import {types} from '../actionTypes';

const initialState ='#ff0000';

export default (state=initialState, action) =>{
    switch(action.type){
        case types.SET_COLOR :
            return action.payload;
        default :
            return state;
    }
};