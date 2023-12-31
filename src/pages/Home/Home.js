import React, { useEffect, useState, useRef, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Container, DivCard, DivIcons, ButtonRightLeft } from "./Style";
import Cards from "../../components/Cards/Cards";
import { APIKey, APIUrl } from "../../API/Config/key";
import { getMovies } from "../../API/Api";
import Right from "../../img/right.png";
import Left from "../../img/left.png";
import OrderContext from "../../context/OrderContext";

//UseEffect: usamos pra chamar a api quando a pagina carregar

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const carousel = useRef(null);
  const { orderMovies } = useContext(OrderContext);

  useEffect(() => {
    const topRatedUrl = `${APIUrl}top_rated?api_key=${APIKey}`;
    const findTopMovies = async () => {
      const movies = await getMovies(topRatedUrl);
      setTopMovies(movies);
    };

    findTopMovies();
  }, []);

  //a função é executada cada vez q algo do arr é mudado
  //com useEffect isso é chamado a cada vez q o componente é carregado

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
    const copy = [...topMovies];

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
    setTopMovies(copy);
  };

  return (
    <>
      <Navbar></Navbar>
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
      </Container>
    </>
  );
};

export default Home;
