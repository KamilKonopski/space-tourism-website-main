import mobileTechnologyBg from '../../assets/technology/background-technology-mobile.jpg';
import tabletTechnologyBg from '../../assets/technology/background-technology-tablet.jpg';
import desktopTechnologyBg from '../../assets/technology/background-technology-desktop.jpg';

import styled from "styled-components";

export const Wrapper = styled.div`
     background: url(${mobileTechnologyBg}) no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;

    @media screen and (min-width: 800px) {
        background: url(${tabletTechnologyBg}) no-repeat;
        background-size: cover;
    }

    @media screen and (min-width: 1280px) {
        background: url(${desktopTechnologyBg}) no-repeat;
        background-size: cover;
    }
`;