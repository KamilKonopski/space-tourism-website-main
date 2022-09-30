// import { NavLink } from "react-router-dom";

import Header from '../../components/Header/Header';
import DestinationItem from '../../components/DestinationItem/DestinationItem'

function Destination() {
    // const moon = destinations.findIndex(destination => destination.name.toLowerCase() === 'moon');
    return (
        <>
            <Header />
            <main>
                <DestinationItem />
            </main>
        </>
    );
};

export default Destination;