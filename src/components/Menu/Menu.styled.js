import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.ul`
    backdrop-filter: blur(35px);
    display: flex;
    flex-direction: column;
    height: 100vh;
    list-style: none;
    position: absolute;
    right: 0;
    top: 0;
    transform: ${({isVisible}) => isVisible ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s linear;
    width: 254px;
    z-index: 1;

    @media screen and (min-width: 800px) {
        backdrop-filter: blur(0);
        background: rgba(11, 13, 23, 0.8);
        flex-direction: row;
        height: 96px;
        line-height: 96px;
        position: static;
        transform: translateX(0);
        width: 100%;
    }
`;

export const CloseMenu = styled.div`
    cursor: pointer;
    padding: 34px 0 45px 200px;

    @media screen and (min-width: 800px) {
        display: none;
    }
`;

export const LinkWrapper = styled.li`
    margin: 0 0 35px 40px;
    padding-right: 30px;
`;

export const LinkStyle = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.2s linear;

    span {
        font-weight: bold;
        letter-spacing: 4px;
        margin-right: 10px;

        @media screen and (min-width: 800px) {
            display: none;
        }

        @media screen and (min-width: 1280px) {
            display: inline-block;
        }
    }
    @media screen and (min-width: 800px) {
        :hover {
        border-bottom: 3px solid #979797;
        padding-bottom: 37px;
        }
    }
    
`;