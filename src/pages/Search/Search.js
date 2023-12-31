import React, { useRef, useState, useEffect, useContext } from "react";
import { Container, DivCard, DivIcons, ButtonRightLeft, Results } from "./Style";
import Button from "../../components/Button/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import { APIKey, APISearch } from "../../API/Config/key";
import Right from "../../img/right.png";
import Left from "../../img/left.png";
import { getMovies } from "../../API/Api";
import Navbar from "../../components/Navbar/Navbar";
import OrderContext from "../../context/OrderContext";
//useSearch do react dom é para pegar a query string daurl e usar

const Search = () => {

  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const carousel = useRef(null);
  const query = searchParams.get("q"); //na url o que eu quero esta depois do 'q'
  const { orderMovies } = useContext(OrderContext);

  useEffect(() => {
    const searchWithQueryURL = `${APISearch}?api_key=${APIKey}&query=${query}`;
    const findTopMovies = async () => {
      const movies = await getMovies(searchWithQueryURL);
      setMovies(movies);
    };
    findTopMovies();
  }, [query]);

  useEffect(() => {
    orderBy();
  }, [orderMovies]);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const orderBy = () => {
    const copy = [...movies];

    if (orderMovies === "A-Z") {
      copy.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        return 1;
      });
    } else if (orderMovies === "Z-A") {
      copy.sort(function (a, b) {
        if (a.title < b.title) {
          return 1;
        }
        return -1;
      });
    }
    setMovies(copy);
  };

  return (
    <>
    <Container>
      <Navbar hideInfosDiv={true}></Navbar>
      <Results>RESULTADOS PARA: <span>{query}</span></Results>
      <DivCard ref={carousel}>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <Cards key={movie.id} movie={movie} />)}
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
    </>
  );
};

export default Search;
