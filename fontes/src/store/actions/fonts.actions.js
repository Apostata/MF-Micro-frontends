import {types} from '../actionTypes';

export const setFont = (fonts) =>{
    return { type: types.SET_FONT, payload:fonts };
};

export const getFonts = () =>{
    return { type: types.GET_FONT };
};
