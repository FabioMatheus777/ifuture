import { TextField } from "@mui/material";
import styled from "styled-components";

export const ContainerFeed = styled.div`
  width: 100%;
`;

export const CardRestaurants = styled.div`
  padding: 0 1rem;
  margin-top: 0.75rem;
`;

export const InputMaterialSearch = styled(TextField)`
  width: 100%;
`;

export const Menu = styled.nav`
  height: 2.625rem;
  display: flex;
  align-items: center;
  padding: 0 1rem 0 0;
  width: 100%;
  overflow-x: auto;
`;

export const MenuItem = styled.button`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: ${(p) => (p.select ? "red" : "black")};
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 1rem;
`;
