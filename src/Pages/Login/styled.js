import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { ReactComponent as Ifuture } from "../../Assets/ifuture.svg";

export const InputMaterial = styled(TextField)`
  width: 100%;
`;

export const IconStyled = styled(Ifuture)`
`;

export const Main = styled.div`
  font-family: Roboto;
  padding: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15rem;
  p {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 30vh;
  justify-content: space-evenly;
`;

export const StyledButton = styled(Button)`
  && {
    color: #000;
    width: 100%;
    background-color: #e8222e;
  }
`;

export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
