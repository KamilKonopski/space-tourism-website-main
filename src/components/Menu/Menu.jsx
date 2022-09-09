import { Link } from "react-router-dom";

const Menu = () => {
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
        <ul>
            {links.map((link, index) => (
                <li key={index}>
                    <Link to={`${link.path}`}><span>0{index}</span>{link.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Menu