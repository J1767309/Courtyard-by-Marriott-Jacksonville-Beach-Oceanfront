import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <span className="header__logo-text">Courtyard</span>
                    <span className="header__logo-sub">by Marriott</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
