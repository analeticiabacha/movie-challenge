import styled from "styled-components";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Header = styled.header`
    background-color: black;
    width: 100vw;
    height: 100px;
    border-bottom: 1px solid rgb(189, 0, 125);
    display: flex;
    padding: 0 10px;
`;

export const Logo = styled.img`
    width: 320px;

    @media (max-width: 700px){
        width: 130px;
    }
    @media (max-width: 450px){
        display: none;
        
    }
`;

export const Titles = styled.div`
    display: flex;
    width: calc(100vw - 260px);
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 90px;
    font-size: 25px;
    margin-right: 150px;

    @media (max-width: 450px){
        gap: 10px;
        margin-right: 10px;
        width: 100vw ;
        
    }

    @media (max-width: 890px){
        gap: 30px;
        margin-right: 50px;
        font-size: 15px;
    }
`;

export const InfosDivHeader = styled.p`
    color: #F7BDE3;
`;

export const DivSearch = styled.div`
    width: 100px;
    color: #BD007D;
    font-size: 45px;
    display: flex;
    align-items: center;

    @media (max-width: 370px){
        width: 50px;
        font-size: 20px;
    }
    @media (max-width: 450px){
        font-size: 20px;
        
    }
`;