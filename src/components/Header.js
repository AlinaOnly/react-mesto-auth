
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header(props) {
  const location = useLocation();
  const pathName = location.pathname === '/signup';

  function handleLogout() {
    props.onLogOut();
  }

  return (
    <header className="header page__container">
      <img src={logo} alt="Логотип сайта Место" className="header__logo" />
        <div className="header__registration-info">
        {props.logIn && (<p className="header__email">{props.email}</p>)}
        {props.logIn && (<p className="header__login" onClick={handleLogout}>Выйти</p>)}
          {props.logIn === false && 
            (<Link to={pathName ? "/signin" : "/signup"} className="header__login">
              { pathName ? "Вoйти" : "Регистрация" }
            </Link>) 
          }
        </div>
    </header>
  );
}

export default Header;
