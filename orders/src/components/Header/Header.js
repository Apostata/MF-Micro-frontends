import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props =>{
    return(
        <nav>
            <ol className="center-column">
                <li>
                    <NavLink to="/orders/buy">buy</NavLink>
                </li>
                <li>
                    <NavLink to="/orders/list">list</NavLink>
                </li>
               
            </ol>
        </nav>
    )
};

export default Header;