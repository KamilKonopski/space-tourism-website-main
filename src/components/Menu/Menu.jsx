import { CloseMenu, LinkStyle, LinkWrapper, Wrapper } from "./Menu.styled";

import closeMobileMenu from '../../assets/shared/icon-close.svg';

const Menu = ({ isVisible, hideMobileMenu }) => {
    const links = [
        {
            name: 'home',
            path: '/',
        },
        {
            name: 'destination',
            path: '/destination',
        },
        {
            name: 'crew',
            path: '/crew',
        },
        {
            name: 'technology',
            path: '/technology',
        },
    ]

    return (
        <Wrapper isVisible={isVisible}>
            <CloseMenu onClick={hideMobileMenu}>
                <img src={closeMobileMenu} alt="close mobile menu icon" />
            </CloseMenu>
            {links.map((link, index) => (
                <LinkWrapper key={index}>
                    <LinkStyle to={`${link.path}`}><span>0{index}</span>{link.name}</LinkStyle>
                </LinkWrapper>
            ))
            }
        </Wrapper >
    )
}

export default Menu