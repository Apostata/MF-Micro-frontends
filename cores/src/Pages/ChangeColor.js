import React from 'react';
import {setColor} from '../store/actions/colors.actions'
import {useSelector, useDispatch} from 'react-redux'

const ChangeColor = props =>{
    const dispatch = useDispatch()
    const {} = useSelector(state=>state);
    return(
        <section>
            Seleciona a cor desejada:
            <select value={color} onChange={(e)=>dispatch(setColor(e.target.value))}>
                <option value={'#02ff44'} style={{color:'#02ff44'}}>Verde</option>
                <option value={'#0221ff'} style={{color:'#0221ff'}}>Azul</option>
                <option value={'#ff0000'} style={{color:'#ff0000'}}>vermelho</option>
            </select>
        </section>
    )
}

export default ChangeColor;