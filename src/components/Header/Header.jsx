import { useState } from 'react';

import Menu from '../Menu/Menu';

import logoImage from '../../assets/shared/logo.svg';
import mobileMenu from '../../assets/shared/icon-hamburger.svg';
import { Logo, MobileMenu, Wrapper } from './Header.styled';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showMobileMenu = () => {
        setIsVisible(true)
    };

    const hideMobileMenu = () => {
        setIsVisible(false)
    };

    return (
        <Wrapper>
            <Logo>
                <img src={logoImage} alt="star logo" />
            </Logo>
            <nav>
                <MobileMenu onClick={showMobileMenu}>
                    <img src={mobileMenu} alt="hamburger menu" />
                </MobileMenu>
                <Menu isVisible={isVisible} hideMobileMenu={hideMobileMenu} />
            </nav>
        </Wrapper>

    );
};

export default Header