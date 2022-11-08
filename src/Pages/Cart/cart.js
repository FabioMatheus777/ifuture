import React, { useEffect, useState } from "react";
import {
  CartConfig,
  CartInfo,
  EmptyCart,
  Form,
  FormaPagamento,
  Freight,
  InfoProfile,
  InfoRestaurant,
  Main,
  Payment,
  StyledButton,
  Total,
} from "./styled";
import { BASE_URL } from "../../Constants/url";
import { useRequestData } from "../../Hooks/useRequestData";
import { Header } from "../../Components/Header/Header";
import { Button } from "@mui/material";
import { Menu as MenuMain } from "../../Components/Menu/Menu";
import { useGlobal } from "../../Global/GlobalStateContext";
import { CardProduct } from "../../Components/CardProduct/CardProduct";
import axios from "axios";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { goToFeed } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  useProtectedPage();
  const profile = useRequestData({}, `${BASE_URL}/profile`);
  const [payment, setPayment] = useState("");
  const [fullPrice, setFullPrice] = useState(0);

  const [paymentMethod] = useState(["money", "creditcard"]);
  const { states, setters } = useGlobal();
  const { cart, restaurant, order } = states;
  const { setOrder, setCart } = setters;

  const navigate = useNavigate();

  const totalPrice = () => {
    let totPrice = 0;
    for (const products of cart) {
      totPrice += products.price * products.quantity;
    }
    setFullPrice(totPrice);
  };

  const onChangePayment = (event) => {
    setPayment(event.target.value);
  };

  const placeOrder = async () => {
    const body = {
      products: cart.map((product) => {
        return {
          id: product.id,
          quantity: product.quantity,
        };
      }),
      paymentMethod: payment,
    };
    console.log(body);
    await axios
      .post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("pedido", res.data);
        setOrder(res.data.order);
        setCart([]);
        goToFeed(navigate);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };

  const onSubmitPlaceOrder = (event) => {
    event.preventDefault();
    placeOrder();
  };

  console.log("restaurante ", restaurant);

  useEffect(() => {
    totalPrice();
  }, []);

  return (
    <Main>
      <Header title="Meu Carrinho" back={true} logOut={true} />
      <CartConfig>
        <InfoProfile>
          <p>Endereço de entrega</p>
          <p>{profile[0].user && profile[0].user.address}</p>
        </InfoProfile>
        <InfoRestaurant>
          <p>{restaurant.name}</p>
          <p>{restaurant.address}</p>
          <p>{restaurant.deliveryTime}</p>
        </InfoRestaurant>
        <CartInfo>
          {cart.length > 0 ? (
            cart.map((products) => {
              return (
                <CardProduct
                  products={products}
                  key={products.id}
                  restaurant={restaurant}
                />
              );
            })
          ) : (
            <EmptyCart>Carrinho vazio</EmptyCart>
          )}
        </CartInfo>
        <Payment>
          <Freight>
            Frete
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(restaurant.shipping ? restaurant.shipping : 0)}
          </Freight>
          <Total>
            <p>SubTotal</p>
            <p>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(fullPrice)}
            </p>
          </Total>
          <FormaPagamento>Forma de pagamento</FormaPagamento>
          <hr />
          <Form onSubmit={onSubmitPlaceOrder}>
            {paymentMethod.map((key) => {
              return (
                <div key={key}>
                  <input
                    checked={payment === key}
                    name={key}
                    id={key}
                    type={"radio"}
                    onChange={onChangePayment}
                    value={key}
                  />
                  <label htmlFor={key}>{key}</label>
                </div>
              );
            })}
            <StyledButton type="submit">Confirmar</StyledButton>
          </Form>
        </Payment>
      </CartConfig>
      <MenuMain page={"cart"} />
    </Main>
  );
};
