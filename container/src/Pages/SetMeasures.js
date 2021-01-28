import React from 'react';
import {setMeasures} from '../store/actions/measures.actions'
import {useSelector, useDispatch} from 'react-redux'

const SetMeasures = props =>{
    const dispatch = useDispatch()
    const {measure} = useSelector(state=>state);
    const [medida, setMedida] = React.useState(measure)
    return(
        <section>
            Digite a medida desejada:
            <input type="number" value={medida} onChange={
                (e)=>{
                    const valor = e.target.value
                    setMedida(valor)
                    if(valor.length >1){
                        dispatch(setMeasures(valor))
                    }
                }
            }/>
        </section>
    )
}

export default SetMeasures;