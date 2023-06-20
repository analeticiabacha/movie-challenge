import styled from "styled-components";

export const Container = styled.div`
    background-color: #020003;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`;

export const DivCrown = styled.div`
    flex: 1; /*ocupa a metade da largura disponivel*/
    color: yellow;
`;

export const DivLogin = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100px;;
`;

export const DivInfos = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px
`;


export const H3 = styled.h3`
    color: #F7BDE3;
`;

export const ImgCrown = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Logo = styled.img`
    width: 550px;

`;