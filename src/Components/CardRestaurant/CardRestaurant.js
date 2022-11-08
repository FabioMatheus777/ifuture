import React, { useEffect, useState } from "react";
import { goToRestaurant } from "../../Routes/coordinator";
import {
  BoxInformTimePrice,
  ContainerCardRestaurant,
  ImageRestaurant,
  InformTimePrice,
  NameRestaurant,
} from "./styled";
import { useNavigate } from "react-router-dom";

export const CardRestaurant = ({ restaurants }) => {
  const navigate = useNavigate();
  return (
    <ContainerCardRestaurant
      onClick={() => goToRestaurant(navigate, restaurants.id)}
    >
      <ImageRestaurant src={restaurants.logoUrl} />
      <NameRestaurant>{restaurants.name}</NameRestaurant>
      <BoxInformTimePrice>
        <InformTimePrice>{restaurants.deliveryTime}</InformTimePrice>
        <InformTimePrice>{restaurants.shipping}</InformTimePrice>
      </BoxInformTimePrice>
    </ContainerCardRestaurant>
  );
};
