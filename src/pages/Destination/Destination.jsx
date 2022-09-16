// import { NavLink } from "react-router-dom";

import Header from '../../components/Header/Header';
import DestinationItem from '../../components/DestinationItem/DestinationItem'

import { Wrapper } from './Destination.styled';

const Destination = (props) => {
    console.log(props);
    // const moon = destinations.findIndex(destination => destination.name.toLowerCase() === 'moon');
    return (
        <Wrapper>
            <Header />
            <main>
                <DestinationItem />
            </main>
        </Wrapper>
    );
};

export default Destination;