import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerCard, StarIcon } from "./Styles";
import { APIImg } from "../../API/Config/key";
import Button from "../Button/Button";

const Cards = ({ movie, showLink = true }) => {
  const navigate = useNavigate();

  return (
    <ContainerCard>
      <img src={APIImg + movie.poster_path} />
      <StarIcon>
        <i class="bi bi-star-fill"></i> {movie.vote_average}
      </StarIcon>
      {showLink && <Button onClick={() => navigate(`/movie/${movie.id}`)}>Detalhes</Button>}
    </ContainerCard>
  );
};

export default Cards;
