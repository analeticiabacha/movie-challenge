import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  Logo,
  Titles,
  DivSearch,
  Typed,
  ButtonInput,
  SelectButton,
} from "./Styles";
import PinkLogo from "../../img/pinkLogo.png";
import OrderContext from "../../context/OrderContext";

const Navbar = (props) => {

  const [search, setSearch] = useState("");
  const {orderMovies, alterOrder} = useContext(OrderContext);
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
    alterOrder(selectedValue);
  };

  console.log(orderMovies);

  return (
    <Header >
      <Logo src={PinkLogo}></Logo>
      <Titles>
        <SelectButton onChange={handleSelectChange}>
          <option disabled selected hidden> ORDENAR POR </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </SelectButton>
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
