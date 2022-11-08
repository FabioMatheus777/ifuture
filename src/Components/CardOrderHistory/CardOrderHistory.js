import React from "react";
import { DataEntrega, MainCard, NomeRestaurant, SubTotal } from "./styled";

export const CardOrderHistory = ({ restaurantName, totalPrice, createdAt }) => {
  const convertDate = (timeStamp) => {
    let time = new Date(timeStamp);
    let day = time.getDate().toString().padStart(2, "0");
    let month = (time.getMonth() + 1).toString().padStart(2, "0");
    let year = time.getFullYear();

    return `${day}/${month}/${year}`;
  };
  return (
    <MainCard>
      <NomeRestaurant>{restaurantName}</NomeRestaurant>
      <DataEntrega>{convertDate(createdAt)}</DataEntrega>
      <SubTotal>
        subtotal:
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(totalPrice)}
      </SubTotal>
    </MainCard>
  );
};
