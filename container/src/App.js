import React, { Fragment as F } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import Routes from './routes/index'


const App = props =>{
  
    const language = 'pt_br'
    return (
        <F>
            <h1>Hello world! {language}</h1>
            <Router>
                <Header/>
                <button type="button">Language</button>
                <Routes/>
            </Router>
        </F>
    );
};

export default App;