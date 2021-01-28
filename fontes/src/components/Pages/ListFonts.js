import React from 'react';
import {useSelector} from 'react-redux'

const ListFonts = props =>{
    
    const {font} = useSelector(state=>state)

    return(
        <section>
           <p>Fonte selectionada: <span style={{fontFamily:font}}>{font}</span></p>
            Possíveis fontes:
            <p value={'cursive'} style={{fontFamily:'cursive'}}>Cursiva</p>
            <p value={'monospace'} style={{fontFamily:'monospace'}}>Monospace</p>
            <p value={'serif'} style={{fontFamily:'serif'}}>Serifada</p>
            <p value={'sans-serif'} style={{fontFamily:'sans-serif'}}>Sem Serifa</p>
        </section>
    )
}

export default ListFonts;