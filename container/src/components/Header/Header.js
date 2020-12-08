import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props =>{
    return(
        <nav>
            <ul className="center-column">
                <li>
                    <NavLink to="/restaurants">restaurantes</NavLink>
                    <ul className="center-column">
                        <li>
                            <NavLink to="/italiano">restaurante Italiano</NavLink>
                        </li>
                        <li>
                            <NavLink to="/japones">restaurante japones</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/order">order</NavLink>
                    <ul className="center-column">
                        <li>
                            <NavLink to="/orders/buy">comprar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/orders/list">lista de compras</NavLink>
                        </li>
                    </ul>
                </li>
               
            </ul>
        </nav>
    )
};

export default Header;