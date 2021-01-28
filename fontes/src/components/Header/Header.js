import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props =>{
    return(
        <nav>
            <ol className="center-column">
                <li>
                    <NavLink to="/changeFont">Mudar fonte</NavLink>
                </li>
                <li>
                    <NavLink to="/listFonts">Lista de fontes</NavLink>
                </li>
               
            </ol>
        </nav>
    )
};

export default Header;