import React from 'react';
import {useSelector} from 'react-redux'

const Home = props =>{
    const {measure} = useSelector(state=>state);
    console.log(measure, color, font)
    return (
        <div>
            Bem vindo ao container
        </div>
    )
}

export default Home