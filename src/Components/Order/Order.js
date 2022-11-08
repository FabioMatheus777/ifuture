import React from "react";
import {
  Title,
  BoxInform,
  ClockStyled,
  MainContainer,
  OrderContainerSpace,
  RestaurantName,
  TotalPrice,
} from "./styled";

export const Order = ({ totalPrice, restaurantName }) => {
  return (
    <>
      <MainContainer>
        <ClockStyled />
        <BoxInform>
          <Title>Pedido-em-andamento</Title>
          <RestaurantName>{restaurantName}</RestaurantName>
          <TotalPrice>SUBTOTAL R${totalPrice}</TotalPrice>
        </BoxInform>
      </MainContainer>
      <OrderContainerSpace />
    </>
  );
};
