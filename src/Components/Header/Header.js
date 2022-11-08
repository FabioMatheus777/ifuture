import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ContainerHeader, Title } from "./styled";
import { useNavigate } from "react-router-dom";
import { goBack, goToLogin } from "../../Routes/coordinator";
import LogoutIcon from "@mui/icons-material/Logout";

export const Header = ({ title, back, logOut }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(navigate);
  };
  return (
    <ContainerHeader>
      {back && <ArrowBackIosNewIcon onClick={() => goBack(navigate)} />}
      <Title>{title}</Title>
      {logOut && <LogoutIcon onClick={() => logout()} />}
    </ContainerHeader>
  );
};
