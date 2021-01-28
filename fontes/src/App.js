import React, {Fragment as F} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './routes/index';
import Header from './components/Header/Header';
import {Provider, useSelector} from 'react-redux'
import store from './store'

const AppComponent = props =>{    
    const {font} = useSelector(state => state)

    return (
        <>
            <h1>Fontes -  a fonte atual é <span style={{fontFamily:font}}>{font}</span></h1>
            <Router>
                <Header/>
                <Routes/>
            </Router>
        </>
    );
};

const App = props =>{
    return(
        <Provider store={store}>
            <AppComponent/>
        </Provider>
    )
}

export default App;
