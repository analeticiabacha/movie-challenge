import React, { useRef, useState, useEffect } from "react";
import { Container, DivCard, DivIcons, ButtonRightLeft } from "./Style";
import Button from "../../components/Button/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import { APIUrl, APIKey } from "../../API/Config/key";
import Right from "../../img/right.png";
import Left from "../../img/left.png";
import { getMovies } from "../../API/Api";
//useSearch do react dom é para pegar a query string daurl e usar

const Search = () => {
  const [topMovies, setTopMovies] = useState([]);
  const carousel = useRef(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); //na url o que eu quero esta depois do 'q'

  useEffect(() => {
    const topRatedUrl = `${APIUrl}top_rated?api_key=${APIKey}`;
    // getMovies(topRatedUrl)
    const findTopMovies = async () => {
      const movies = await getMovies(topRatedUrl);
      setTopMovies(movies);
    };

    findTopMovies();
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Container>
      <DivCard ref={carousel}>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <Cards key={movie.id} movie={movie} />)}
      </DivCard>
      <DivIcons>
        <ButtonRightLeft onClick={handleLeftClick}>
          <img alt="left" src={Left} />
        </ButtonRightLeft>
        <ButtonRightLeft onClick={handleRightClick}>
          <img alt="right" src={Right} />
        </ButtonRightLeft>
      </DivIcons>
      <Button onClick={() => navigate(`/HomePrincinema`)}>Voltar</Button>
    </Container>
  );
};

export default Search;
