import React from 'react';
import './Nav.css';

export const Nav = props => {
    return (
        <React.Fragment>
            <nav id="navbar">
                <div className="nav-wrapper">
                    <p className="brand">
                        Byte
                        <strong>Genius</strong>
                    </p>
                    <a
                        href='/'
                        onClick={props.toggleMenu}
                        className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
                    >
                        <span />
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
};