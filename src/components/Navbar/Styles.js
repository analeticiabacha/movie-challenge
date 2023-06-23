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
    width: 300px;
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

export const Typed = styled.input`
    padding: .2rem .8rem;
    border-radius: 4px 0 0 4px;
    border: none;
    height: 30px;
    background-color: black ;
    color: white
`;

export const ButtonInput = styled.button`
    background-color: #BD007D;
    border: 2px solid #BD007D;
    border-radius: 0 4px 4px 0;
    color: black;
    padding: .3rem;
    font-size: 1.3rem;
    display:flex;
    align-items: center;
    cursor: pointer;
    height: 30px;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.3;
    }
`;