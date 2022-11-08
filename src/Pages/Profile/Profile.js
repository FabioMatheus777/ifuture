import React from "react";
import { useNavigate } from "react-router-dom";
import { CardOrderHistory } from "../../Components/CardOrderHistory/CardOrderHistory";
import { Header } from "../../Components/Header/Header";
import { Menu as MenuMain } from "../../Components/Menu/Menu";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useRequestData } from "../../Hooks/useRequestData";
import { goToAddressEdit, goToProfileEdit } from "../../Routes/coordinator";
import {
  EnderecoPessoa,
  HistoricoCompras,
  Informacoes,
  Main,
  MainHistory,
  OrderHistory,
  PerfilPessoa,
} from "./styled";

export const Profile = () => {
  useProtectedPage();

  const person = useRequestData({}, `${BASE_URL}/profile`);
  const order = useRequestData([], `${BASE_URL}/orders/history `);

  const navigate = useNavigate();
  console.log(order[0].orders);

  return (
    <Main>
      <Header title={"Meu perfil"} back={true} logOut={true} />
      <Informacoes>
        <PerfilPessoa>
          <div>
            <p>{person[0].user && person[0].user.name}</p>
            <p>{person[0].user && person[0].user.email}</p>
            <p>{person[0].user && person[0].user.cpf}</p>
          </div>
          <div onClick={() => goToProfileEdit(navigate, person[0].user.id)}>
            Editar
          </div>
        </PerfilPessoa>
        <EnderecoPessoa>
          <div>
            <h4>Endereço cadastrado</h4>
            <p>{person[0].user && person[0].user.address}</p>
          </div>
          <div onClick={() => goToAddressEdit(navigate, person[0].user.id)}>
            Editar
          </div>
        </EnderecoPessoa>
        <HistoricoCompras>
          <MainHistory>
            <p>Historico de compras</p>
          </MainHistory>
          <OrderHistory>
            {order[0].orders && order[0].orders.length > 0 ? (
              order[0].orders &&
              order[0].orders.map((order) => {
                return (
                  <CardOrderHistory
                    restaurantName={order.restaurantName}
                    totalPrice={order.totalPrice}
                    createdAt={order.createdAt}
                  />
                );
              })
            ) : (
              <p>você ainda não realizou nenhum pedido</p>
            )}
          </OrderHistory>
        </HistoricoCompras>
      </Informacoes>
      <MenuMain page={"profile"} />
    </Main>
  );
};
