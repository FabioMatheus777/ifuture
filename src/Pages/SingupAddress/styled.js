import styled from "styled-components";
import { Button, TextField } from "@mui/material";

export const InputMaterial = styled(TextField)`
  width: 100%;
`;

export const Main = styled.div`
  font-family: Roboto;
  padding: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding: 35px;
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 50vh;
  justify-content: space-evenly;
`;

export const StyledButton = styled(Button)`
  && {
    color: #000;
    width: 100%;
    background-color: #e8222e;
  }
`;
