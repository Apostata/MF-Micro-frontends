import React, {Fragment as F} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './routes/index';
import Header from './components/Header/Header';

const App = props =>{    

    const language = 'pt_br'
    return (
        <F>
            <h1>Hello Orders {language}</h1>
            <button type="button" onClick={()=>{}}>change</button>
            <Router>
                <Header/>
                <Routes/>
            </Router>
        </F>
    );
};

export default App;
