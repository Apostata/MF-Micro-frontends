import React, {Fragment as F} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes/index';
import Header from './components/Header/Header';
import {Provider, useSelector} from 'react-redux'
import store from './store'

const AppComponent = props =>{    
    const {color, font} = useSelector(state=>state);
    const {measure} = useSelector(state => state)

    return (
        <div style={{color:color, fontFamily:font, fontSize: '0.8rem', margin:`0px ${measure}px`}}>
            <h1>Container -  as margens atuais são de <span style={{margin:`0px ${measure}px` }}>{measure}</span></h1>
            <Router>
                <div style={{display:'flex'}}>
                    <Header/>
                    <Routes/>
                </div>
            </Router>
        </div>
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
