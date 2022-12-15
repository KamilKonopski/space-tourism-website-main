import { NavLink } from 'react-router-dom';

import classes from './Menu.module.css'
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
        <ul className={`${classes.menu} ${!isVisible && classes.hidden}`}>
            <div className={classes['burger--close']} onClick={hideMobileMenu}>
                <img src={closeMobileMenu} alt="close mobile menu icon" />
            </div>
            {links.map((link, index) => (
                <li className={classes['menu__link']} key={index}>
                    <NavLink className={classes['menu__item']} to={`${link.path}`}><span>0{index}</span>{link.name}</NavLink>
                </li>
            ))
            }
        </ul>
    )
}

export default Menu