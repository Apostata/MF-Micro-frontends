import {types} from '../actionTypes';

const initialState ='sans-serif';

export default (state=initialState, action) =>{
    switch(action.type){
        case types.SET_FONT :
            return action.payload;
        default :
            return state;
    }
};