// import { useState } from 'react';

// import Menu from '../Menu/Menu'

import logoImage from '../../assets/shared/logo.svg';
import mobileMenu from '../../assets/shared/icon-hamburger.svg';
import { Logo, MobileMenu, Wrapper } from './Header.styled';

const Header = () => {
    // const [isActive, setIsActive] = useState(false);

    return (
        <Wrapper>
            <Logo>
                <img src={logoImage} alt="star logo" />
            </Logo>
            <nav>
                <MobileMenu>
                    <img src={mobileMenu} alt="hamburger menu" />
                </MobileMenu>
                {/* <Menu /> */}
            </nav>
        </Wrapper>

    );
};

export default Header