import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    position: relative;
`

export const Logo = styled.div`
    height: 40px;
    padding: 24px 24px;
    width: 40px;

    @media screen and (min-width: 1280px) {
        height: 48px;
        padding: 64px 55px;
        width: 48px;
    }
`;

export const MobileMenu = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 33px 24px;

    @media screen and (min-width: 800px) {
        display: none;
    }
`;