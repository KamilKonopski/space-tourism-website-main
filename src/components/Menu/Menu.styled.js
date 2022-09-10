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
    transform: ${({isVisible}) => isVisible ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s linear;
    top: 0;
    width: 254px;
    z-index: 1;
`;

export const CloseMenu = styled.div`
    cursor: pointer;
    padding: 34px 0 45px 200px;
`;

export const LinkWrapper = styled.li`
    margin: 0 0 35px 40px;
`;

export const LinkStyle = styled(Link)`
    color: ${({theme}) => theme.colors.white};
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;

    span {
        font-weight: bold;
        letter-spacing: 4px;
        margin-right: 10px;
    }
`;