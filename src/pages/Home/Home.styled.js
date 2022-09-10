import { Link } from "react-router-dom";

import mobileHomeBg from '../../assets/home/background-home-mobile.jpg';
import styled from "styled-components";

export const Wrapper = styled.div`
    background: url(${mobileHomeBg});
    height: 100vh;
`;

export const ContentWrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Bellefair', serif;
    justify-content: center;
`;

export const SubHeading = styled.span`
    color: ${({theme}) => theme.colors.light};
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 2.7px;
    margin-bottom: 16px;
    text-transform: uppercase;
`;

export const Heading = styled.h1`
    color: ${({theme}) => theme.colors.white};
    flex-basis: 100%;
    font-size: 80px;
    font-weight: 400;
    margin-bottom: 16px;
    text-align: center;
    text-transform: uppercase;
`;

export const Text = styled.p`
    color: ${({theme}) => theme.colors.light};
    font-family: 'Barlow', sans-serif;
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 80px;
    padding: 0 25px;
    text-align: center;
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.colors.white};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 150px;
    width: 150px;
`;

export const ExploreButton = styled(Link)`
    color: ${({theme}) => theme.colors.dark};
    font-family: 'Bellefair', serif;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
`