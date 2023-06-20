import React from "react";
import { Container, DivCrown, DivLogin, H3, Main, ImgCrown, Logo, DivInfos } from "./Style";
import LogoCrown from "../../img/LogoCrown.png";
import LogoPink from "../../img/pinkLogo.png";

const Login = () => {

    return(
        <Container>
            <Main>
                <DivCrown>
                    <ImgCrown src={LogoCrown}/>
                </DivCrown>
                <DivLogin>
                    <Logo src={LogoPink}/>
                    <DivInfos>
                        <H3>ENTRAR</H3>
                        <H3>ABOUT AUTHOR</H3>
                    </DivInfos>
                </DivLogin>
            </Main>
        </Container>
    )

};

export default Login;
