import mobileCrewBg from '../../assets/crew/background-crew-mobile.jpg';
import tabletCrewBg from '../../assets/crew/background-crew-tablet.jpg';
import desktopCrewBg from '../../assets/crew/background-crew-desktop.jpg';

import styled from "styled-components";

export const Wrapper = styled.div`
     background: url(${mobileCrewBg}) no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;

    @media screen and (min-width: 800px) {
        background: url(${tabletCrewBg}) no-repeat;
        background-size: cover;
    }

    @media screen and (min-width: 1280px) {
        background: url(${desktopCrewBg}) no-repeat;
        background-size: cover;
    }
`;