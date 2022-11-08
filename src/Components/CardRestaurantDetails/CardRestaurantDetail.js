import React, { useEffect, useState } from "react";
import { goToRestaurant } from "../../Routes/coordinator";
import {
  BoxInformTimePrice,
  ContainerCardRestaurantDetail,
  ImageRestaurant,
  Inform,
  NameRestaurant,
} from "./styled";
import { useNavigate } from "react-router-dom";

export const CardRestaurantDetail = ({ restaurant }) => {
  const navigate = useNavigate();
  return (
    <ContainerCardRestaurantDetail
      onClick={() => goToRestaurant(navigate, restaurant.id)}
    >
      <ImageRestaurant src={restaurant.logoUrl} />
      <NameRestaurant>{restaurant.name}</NameRestaurant>
      <Inform>{restaurant.category}</Inform>
      <BoxInformTimePrice>
        <Inform>{`${restaurant.deliveryTime} min`}</Inform>
        <Inform>{`Frete R$${restaurant.shipping}`}</Inform>
      </BoxInformTimePrice>
      <Inform>{restaurant.address}</Inform>
    </ContainerCardRestaurantDetail>
  );
};
