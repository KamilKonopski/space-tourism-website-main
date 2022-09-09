

import Menu from '../Menu/Menu'

import logoImage from '../../assets/shared/logo.svg';

const Header = () => {
    return (
        <header>
            <div>
                <img src={logoImage} alt="star logo" />
            </div>
            <nav>
                <Menu />
            </nav>
        </header>

    );
};

export default Header