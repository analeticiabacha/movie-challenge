import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  P,
  H3,
  DivCard,
  DivButton,
  DivDetails,
  DivTwo,
} from "./Styles";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Cards from "../../components/Cards/Cards";
import { APIKey, APIUrl } from "../../API/Config/key";
import { getMovie } from "../../API/Api";
import Navbar from "../../components/Navbar/Navbar";

const AboutMovies = () => {
  const { id } = useParams();
  const [movie, setMovies] = useState(null);
  const navigate = useNavigate();

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }


  useEffect(() => {
    const movieURL = `${APIUrl}${id}?api_key=${APIKey}&language=pt-BR`;
    const findTopMovies = async () => {
      const movies = await getMovie(movieURL);
      setMovies(movies);
    };

    findTopMovies();
  }, []);

  return (
    <>
      <Container>
        <Navbar hideInfosDiv={true}></Navbar>
        {movie && (
          <DivTwo>
            <DivCard>
              <Cards movie={movie} showLink={false}></Cards>
            </DivCard>
            <DivDetails>
              <P>{movie.tagline}</P>
              <H3>Orçamento:</H3>
              <P>{formatCurrency(movie.budget)}</P>
              <H3>Receita:</H3>
              <P>{formatCurrency(movie.revenue)}</P>
              <H3>Duração:</H3>
              <P>{movie.runtime} minutos</P>
              <H3>Descrição:</H3>
              <P>{movie.overview} minutos</P>
            </DivDetails>
          </DivTwo>
        )}
        <DivButton>
          <Button onClick={() => navigate(`/HomePrincinema`)}>VOLTAR</Button>
        </DivButton>
      </Container>
    </>
  );
};
export default AboutMovies;
