import React from 'react';
import {setFont} from '../../store/actions/fonts.actions'
import {useSelector, useDispatch} from 'react-redux'

const ChangeFont = props =>{
    const dispatch = useDispatch()
    const {font} = useSelector(state=>state);
    return(
        <section>
            Seleciona a fonte desejada:
            <select value={font} onChange={(e)=>dispatch(setFont(e.target.value))}>
                <option value={'cursive'} style={{fontFamily:'cursive'}}>Cursiva</option>
                <option value={'monospace'} style={{fontFamily:'monospace'}}>Monospace</option>
                <option value={'serif'} style={{fontFamily:'serif'}}>Serifada</option>
                <option value={'sans-serif'} style={{fontFamily:'sans-serif'}}>Sem Serifa</option>
            </select>
        </section>
    )
}

export default ChangeFont;