import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    height: 100vh;
`;

export const DivCard = styled.div`
    margin-top: 80px;
    display: flex;
    height: 500px;
    gap: 10px;
    width: 100vw;
    &::-webkit-scrollbar{
        display: none;
    }
    overflow-x: auto;
    scroll-behavior: smooth;
   
`;

export const DivIcons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`;
export const ButtonRightLeft = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
