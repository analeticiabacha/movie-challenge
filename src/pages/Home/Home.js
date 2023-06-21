import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Container, DivCard, DivIcons, ButtonRightLeft } from "./Style";
import Cards from "../../components/Cards/Cards";
import { APIKey, APIUrl } from "../../API/Config/key";
import { getMovies } from "../../API/Api";
import Right from "../../img/right.png";
import Left from "../../img/left.png";

//UseEffect: usamos pra chamar a api quando a pagina carregar

const Home = () => {
    
  const [topMovies, setTopMovies] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    const topRatedUrl = `${APIUrl}top_rated?${APIKey}`;
    getMovies(topRatedUrl);
  }, []);

  //a função é executada cada vez q algo do arr é mudado
  //com useEffect isso é chamado a cada vez q o componente é carregado

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <DivCard ref={carousel}>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
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
