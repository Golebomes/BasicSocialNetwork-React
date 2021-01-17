import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (

        <header className={h.header}>
            <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'></img>

            <div className={h.loginBlock}>
                {props.isAuth ? props.userId
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;