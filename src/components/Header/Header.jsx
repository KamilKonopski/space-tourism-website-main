import { useState } from 'react';

import Menu from '../Menu/Menu';


import classes from './Header.module.css'
import logoImage from '../../assets/shared/logo.svg';
import mobileMenu from '../../assets/shared/icon-hamburger.svg';

function Header() {
    const [isVisible, setIsVisible] = useState(false);

    function showMobileMenu() {
        setIsVisible(true)
    };

    function hideMobileMenu() {
        setIsVisible(false)
    };

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logoImage} alt="star logo" />
            </div>
            <div></div>
            <nav className={classes.nav}>
                <div className={classes.burger} onClick={showMobileMenu}>
                    <img src={mobileMenu} alt="hamburger menu" />
                </div>
                <Menu isVisible={isVisible} hideMobileMenu={hideMobileMenu} />
            </nav>
        </header>

    );
};

export default Header