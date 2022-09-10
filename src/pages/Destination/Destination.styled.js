import mobileDestinationBg from '../../assets/destination/background-destination-mobile.jpg';
import tabletDestinationBg from '../../assets/destination/background-destination-tablet.jpg';
import desktopDestinationBg from '../../assets/destination/background-destination-desktop.jpg';

import styled from "styled-components";

export const Wrapper = styled.div`
    background: url(${mobileDestinationBg}) no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;

    @media screen and (min-width: 800px) {
        background: url(${tabletDestinationBg}) no-repeat;
        background-size: cover;
    }

    @media screen and (min-width: 1280px) {
        background: url(${desktopDestinationBg}) no-repeat;
        background-size: cover;
    }
`;