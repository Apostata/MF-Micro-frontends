import React, {Fragment as F} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './routes/index';
import Header from './components/Header/Header';
import {Provider, useSelector} from 'react-redux'
import store from './store'

const AppComponent = props =>{    
    const color = useSelector(state => state.color)

    return (
        <>
            <h1>Cores -  a cor atual é <span style={{color:color}}>{color}</span></h1>
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
