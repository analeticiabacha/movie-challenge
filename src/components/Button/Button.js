import React from "react";
import { StyledButton } from "./Styles";

const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;