import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  Logo,
  Titles,
  InfosDivHeader,
  DivSearch,
  Typed,
  ButtonInput,
} from "./Styles";
import PinkLogo from "../../img/pinkLogo.png";

const Navbar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchTyped = () => {
    console.log(search);
    if(!search){
        return;
    }
    navigate(`/search?q=${search}`);
    setSearch("")
  }

  return (
    <Header>
      <Logo src={PinkLogo}></Logo>
      <Titles>
        <InfosDivHeader> ORDENAR </InfosDivHeader>
        <InfosDivHeader> GÊNERO </InfosDivHeader>
        <InfosDivHeader> TIPO </InfosDivHeader>
      </Titles>
      <DivSearch>
        <Typed
          type="text"
          name="text"
          placeholder="Pesquisar"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        ></Typed>
        <ButtonInput onClick={searchTyped}>
          <i class="bi bi-search"></i>{" "}
        </ButtonInput>
      </DivSearch>
    </Header>
  );
};

export default Navbar;
