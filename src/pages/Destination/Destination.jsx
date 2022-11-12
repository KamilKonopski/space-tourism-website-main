// import { NavLink } from "react-router-dom";

import Header from '../../components/Header/Header';

import classes from './Destination.module.css';

function Destination() {
    // const moon = destinations.findIndex(destination => destination.name.toLowerCase() === 'moon');
    return (
        <div className={classes['destination-page']}>
            <Header />
            <main>
            </main>
        </div>
    );
};

export default Destination;