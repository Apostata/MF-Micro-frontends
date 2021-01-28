import React from 'react';
import {useSelector} from 'react-redux'
 
const ListCorlor = props =>{
    const {color} = useSelector(state =>state)
    return(
        <section>
            <p>Cor selectionada: <span style={{color:color}}>{color}</span></p>
            Possíveis cores:
            <p value={'#02ff44'} style={{color:'#02ff44'}}>Verde</p>
            <p value={'#0221ff'} style={{color:'#0221ff'}}>Azul</p>
            <p value={'#ff0000'} style={{color:'#ff0000'}}>vermelho</p>
        </section>
    )
}

export default ListCorlor;