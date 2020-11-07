import React from 'react';
import classNames from 'classnames';

import './HeaderMenu.scss';
import burgerMenuOpen from '../../assets/icons/burgerMenuOpen.png';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';

const HeaderMenu = ({ isMenu, closeMenu, menuRef }) => {
    return (
        <div
            className={classNames("header__menu", { 'active': isMenu })}
            ref={menuRef}
        >
            <img
                src={burgerMenuOpen}
                alt="menu"
                className="header__menu-burger"
                onClick={closeMenu}
            />
            <div className="header__menu-lists">
                <ul>
                    <li className="active" >
                        <a href="#">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            NATIVE STORE
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            LEAF
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            OUR PROJECTS
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            CONTACT US
                        </a>
                    </li>
                </ul>
            </div>
            <div className="header__menu-down">
                <div className="header__menu-down-account">
                    <ul>
                        <li>
                            <a href="#">
                                Log In
                            </a>
                        </li>
                        <li>
                            <a className="register" href="#">
                                REGISTER
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="header__menu-down-social">
                    <div className="header__menu-down-social-title">
                        FOLLOW US
                    </div>
                    <div className="header__menu-down-social-list">
                        <a href="#">
                            <img src={facebook} alt="social" />
                        </a>
                        <a href="#">
                            <img src={instagram} alt="social" />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="social" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu;
