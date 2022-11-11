import { NavLink } from 'react-router-dom';

import closeMobileMenu from '../../assets/shared/icon-close.svg';

function Menu({ isVisible, hideMobileMenu }) {
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
        <div isVisible={isVisible}>
            <button onClick={hideMobileMenu}>
                <img src={closeMobileMenu} alt="close mobile menu icon" />
            </button>
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink to={`${link.path}`}><span>0{index}</span>{link.name}</NavLink>
                </li>
            ))
            }
        </div>
    )
}

export default Menu
