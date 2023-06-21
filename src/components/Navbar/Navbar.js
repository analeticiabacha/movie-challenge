import React from "react";
import { Header, Logo, Titles, InfosDivHeader, DivSearch} from "./Styles";
import PinkLogo from "../../img/pinkLogo.png";


const Navbar = () => {

    return (
        <Header>
            <Logo src={PinkLogo}></Logo>
           <Titles>
                <InfosDivHeader> ORDENAR </InfosDivHeader>
                <InfosDivHeader> GÊNERO </InfosDivHeader>
                <InfosDivHeader> TIPO </InfosDivHeader>
           </Titles>
           <DivSearch>
                <i class="bi bi-search"></i>
           </DivSearch>
           
        </Header>
    )

}

export default Navbar;