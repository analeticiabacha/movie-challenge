import React from "react";
import { Cracha, DivButton, StyledAboutAuthor } from "./Styles";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import CrachaImg from "../../img/cracha.png"

const AboutAuthor = () => {

    const navigate = useNavigate();

    function backToHome() {
        navigate('/');
    } 

  return (
    <>
      <StyledAboutAuthor>
        <Cracha>
            <img alt="analeticia" height="450" width="290" src={CrachaImg}></img>
        </Cracha>
        <DivButton>
            <Button onClick={backToHome}>VOLTAR</Button>
        </DivButton>
        
      </StyledAboutAuthor>
    </>
  );
};

export default AboutAuthor;
