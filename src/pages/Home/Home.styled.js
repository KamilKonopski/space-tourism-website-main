import { Link } from "react-router-dom";

import mobileHomeBg from '../../assets/home/background-home-mobile.jpg';
import tabletHomeBg from '../../assets/home/background-home-tablet.jpg';
import desktopHomeBg from '../../assets/home/background-home-desktop.jpg';

import styled from "styled-components";

export const Wrapper = styled.div`
    background: url(${mobileHomeBg}) no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;

    @media screen and (min-width: 800px) {
        background: url(${tabletHomeBg}) no-repeat;
        background-size: cover;
    }

    @media screen and (min-width: 1280px) {
        background: url(${desktopHomeBg}) no-repeat;
        background-size: cover;
    }
`;

export const ContentWrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Bellefair', serif;
    justify-content: center;

    @media screen and (min-width: 800px) {
        margin-top: 106px;
    }
`;

export const SubHeading = styled.span`
    color: ${({theme}) => theme.colors.light};
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 2.7px;
    margin-bottom: 16px;
    text-transform: uppercase;

    @media screen and (min-width: 800px) {
        font-size: 20px;
        letter-spacing: 3.38px;
        margin-bottom: 24px;
    }
`;

export const Heading = styled.h1`
    color: ${({theme}) => theme.colors.white};
    flex-basis: 100%;
    font-size: 80px;
    font-weight: 400;
    margin-bottom: 16px;
    text-align: center;
    text-transform: uppercase;

    @media screen and (min-width: 800px) {
        font-size: 150px;
        margin-bottom: 24px;
    }
`;

export const Text = styled.p`
    color: ${({theme}) => theme.colors.light};
    font-family: 'Barlow', sans-serif;
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 80px;
    padding: 0 25px;
    text-align: center;

    @media screen and (min-width: 800px) {
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 150px;
        padding: 0 180px;
    }
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.colors.white};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 150px;
    width: 150px;

    @media screen and (min-width: 800px) {
        height: 242px;
        width: 242px;   
    }
`;

export const ExploreButton = styled(Link)`
    color: ${({theme}) => theme.colors.dark};
    font-family: 'Bellefair', serif;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;

    @media screen and (min-width: 800px) {
        font-size: 32px;
    }
`