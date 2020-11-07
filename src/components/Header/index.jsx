import React from 'react';
import classNames from 'classnames';

import './Header.scss';

import headerLogo from '../../assets/img/leafLogo.png';
import burgerMenu from '../../assets/icons/burgerMenu.png';
import cartMenu from '../../assets/icons/cartMenu.png';
import faqMenu from '../../assets/icons/faqMenu.png';
import treeMenu from '../../assets/icons/treeMenu.png';
import HeaderMenu from '../HeaderMenu';

const Header = () => {
    const [onChangeLang, setOnChangeLang] = React.useState(false);
    const [toggleMenu, setToggleMenu] = React.useState(false);

    const clickChangeLang = () => {
        setOnChangeLang(!onChangeLang);
    }

    const menuRef = React.useRef(null);
    const openRef = React.useRef(null);

    const closeMenuOutside = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(menuRef.current) && !path.includes(openRef.current)) {
            setToggleMenu(false)
        }
    }
    React.useEffect(() => {
        document.body.addEventListener('click', closeMenuOutside);
    }, []);

    return (
        <>
            <HeaderMenu
                isMenu={toggleMenu}
                closeMenu={() => setToggleMenu(false)}
                menuRef={menuRef}
            />
            <div className="header">
                <div className="container">
                    <div className="header__box">
                        <div className="header__logo">
                            <a href="#">
                                <img src={headerLogo} alt="Logo" />
                            </a>
                        </div>
                        <div className="header__tools">
                            <div
                                className="header__tools-switch"
                                onClick={clickChangeLang}
                            >
                                <p>fr</p>
                                <p>en</p>
                                <div className={classNames('header__switch', { 'changeLang': onChangeLang })} />
                            </div>
                            <div className="header__tools-menu">
                                <div
                                    className={classNames("header__tools-menu-burger", {"isOpen":toggleMenu})}
                                    onClick={() => setToggleMenu(true)}
                                    ref={openRef}
                                >
                                    <img src={burgerMenu} alt="menu" />
                                </div>
                                <div className="header__tools-menu-item">
                                    <img src={treeMenu} alt="tree" />
                                </div>
                                <div className="header__tools-menu-item">
                                    <img src={cartMenu} alt="cart" />
                                </div>
                                <div className="header__tools-menu-item">
                                    <img src={faqMenu} alt="faq" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
