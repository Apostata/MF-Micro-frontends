import {types} from '../actionTypes';

export const setColor = (color) =>{
    return { type: types.SET_COLOR, payload:color };
};

export const getColor = () =>{
    return { type: types.GET_COLOR };
};
