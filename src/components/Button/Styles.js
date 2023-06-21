import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge #BD007D;
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;

  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: #020003;
    transition: 0.5s;
    transform-origin: center;
  }

  &::before {
    content: "";
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: #020003;
    transition: 0.5s;
  }

  &:hover::before,
  &:hover::after {
    transform: scale(0);
  }

  &:hover {
    box-shadow: inset 0px 0px 25px #BD007D;
  }
`;
