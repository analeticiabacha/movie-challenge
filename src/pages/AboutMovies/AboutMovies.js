import React from "react";
import { Container } from "./Styles";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const AboutMovies = () => {

  const navigate = useNavigate();

  return (
   <Container>
    <Button onClick={() => navigate(`/HomePrincinema`)}>
        VOLTAR
    </Button>
   </Container>
  );

};
export default AboutMovies;
