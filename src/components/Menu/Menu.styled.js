import styled from "styled-components";

import { NavLink } from "react-router-dom";

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
        background: rgba(151, 151, 151, .1);
        flex-direction: row;
        height: 96px;
        line-height: 96px;
        position: static;
        transform: translateX(0);
        width: 100%;
    }

    @media screen and (min-width: 1280px) {
        backdrop-filter: blur(35px);
        background: transparent;
        margin-top: 40px;
        margin-right: 100px;
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

    @media screen and (min-width: 1280px) {
    &:first-of-type {
        margin-left: 150px;
    }
}
`;

export const LinkStyle = styled(NavLink)`
    color: ${({theme}) => theme.colors.white};
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    &.active {
        border-bottom: 3px solid ${({theme}) => theme.colors.white};
        padding-bottom: 37px;
    }

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
