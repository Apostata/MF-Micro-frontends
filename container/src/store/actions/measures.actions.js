import {types} from '../actionTypes';

export const setMeasures = (measures) =>{
    return { type: types.SET_MEASURE, payload:measures };
};

export const getMeasures = () =>{
    return { type: types.GET_MEASURES };
};
