import { Button } from "@mui/material";
import styled from "styled-components";

export const Main = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainCart = styled.div`
  display: flex;
  height: 5%;
  justify-content: center;
  align-items: center;
`;

export const CartConfig = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const InfoProfile = styled.div`
  margin-top: 5px;
  flex-grow: 0.1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-family: Roboto;
  width: 100%;
  background-color: lightgray;
`;

export const InfoRestaurant = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.2rem;
  margin: 10px;
  p:nth-child(1) {
    color: red;
  }
`;
export const CartInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EmptyCart = styled.p`
  font-size: 2rem;
  text-align: center;
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  p,
  label {
    font-size: 1.2rem;
  }
`;

export const Freight = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  p:nth-child(2) {
    color: red;
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    margin: 5px;
  }
  label {
    font-size: 1.5rem;
  }
  input {
    height: 20px;
    width: 20%;
  }
`;

export const FormaPagamento = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
  padding: 0 5px;
`;

export const StyledButton = styled(Button)`
  position: fixed;
  bottom: 0;
`;
