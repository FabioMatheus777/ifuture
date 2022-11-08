import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCart, goToFeed, goToProfile } from "../../Routes/coordinator";
import {
  AvatarStyled,
  CartStyled,
  HomeStyled,
  MainContainer,
  MenuContainerSpace,
} from "./styled";

export const Menu = ({ page }) => {
  const navigate = useNavigate();

  return (
    <>
      <MainContainer>
        <HomeStyled
          pageCurrent={page === "home"}
          onClick={() => goToFeed(navigate)}
        />
        <CartStyled
          pageCurrent={page === "cart"}
          onClick={() => goToCart(navigate)}
        />
        <AvatarStyled
          pageCurrent={page === "profile"}
          onClick={() => goToProfile(navigate)}
        />
      </MainContainer>
      <MenuContainerSpace />
    </>
  );
};
