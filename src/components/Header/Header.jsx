import { useState } from 'react';

import Menu from '../Menu/Menu';

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
        <>
            <div>
                <img src={logoImage} alt="star logo" />
            </div>
            <div></div>
            <nav>
                <button onClick={showMobileMenu}>
                    <img src={mobileMenu} alt="hamburger menu" />
                </button>
                <Menu isVisible={isVisible} hideMobileMenu={hideMobileMenu} />
            </nav>
        </>

    );
};

export default Header
