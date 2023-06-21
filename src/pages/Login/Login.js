import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, DivCrown, DivLogin, Main, ImgCrown, Logo, DivInfos } from "./Style";
import LogoCrown from "../../img/LogoCrown.png";
import LogoPink from "../../img/pinkLogo.png";
import Button from "../../components/Button/Button";

const Login = () => {

    const navigate = useNavigate();

    function changeToHomeScreen() {
        navigate('/HomePrincinema');
    } 

    function changeToAboutAuthor() {
        navigate('/AboutAuthor');
    } 

    return(
        <Container>
            <Main>
                <DivCrown>
                    <ImgCrown src={LogoCrown}/>
                </DivCrown>
                <DivLogin>
                    <Logo src={LogoPink}/>
                    <DivInfos>
                        <Button onClick={changeToHomeScreen}>ENTRAR</Button>
                        <Button onClick={changeToAboutAuthor}>ABOUT AUTHOR</Button>
                    </DivInfos>
                </DivLogin>
            </Main>
        </Container>
    )

};

export default Login;
