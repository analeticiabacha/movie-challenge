import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  Logo,
  Titles,
  ButtonTwo,
  DivSearch,
  Typed,
  ButtonInput,
  SelectButton,
} from "./Styles";
import PinkLogo from "../../img/pinkLogo.png";

const Navbar = (props) => {

  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const navigate = useNavigate();

  const searchTyped = () => {
    console.log(search);
    if(!search){
        return;
    }
    navigate(`/search?q=${search}`);
    setSearch("")
  }

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value; //valor selecionado pelo usuário
    setOrderBy(selectedValue); //atuliza o estado c o valor 
    console.log(selectedValue);

  };


  return (
    <Header >
      <Logo src={PinkLogo}></Logo>
      <Titles>
        <SelectButton value={orderBy} onChange={handleSelectChange}>
          <option disabled selected hidden> ORDENAR POR </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </SelectButton>
        <ButtonTwo hide={props.hideInfosDiv}> GÊNERO </ButtonTwo>
        <ButtonTwo hide={props.hideInfosDiv}> TIPO </ButtonTwo>
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
