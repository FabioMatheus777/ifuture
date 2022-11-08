import React, { useState } from "react";
import { useGlobal } from "../../Global/GlobalStateContext";
import { ModalSelectQuantity } from "../ModalSelectQuantity/ModalSelectQuantity";
import {
  BoxInform,
  BoxInformPriceButton,
  BoxNameQuantity,
  ContainerCardProduct,
  ImageProduct,
  InformAddItemButton,
  InformDescription,
  Informprice,
  InformRemoveItemButton,
  NameProduct,
  QuantityProductChoiced,
} from "./styled";

export const CardProduct = ({ products, restaurant }) => {
  const [showModal, setShowModal] = useState(false);

  const { states, requests } = useGlobal();
  const { addToCart, RemoveToCart } = requests;
  const { cart } = states;

  const choiceQuantity = (quantity) => {
    addToCart(products, quantity, restaurant);
    setShowModal(false);
  };

  const productInCart = cart.find(
    (productCart) => productCart.id === products.id
  );
  console.log(productInCart);

  return (
    <ContainerCardProduct>
      <ImageProduct src={products.photoUrl} />
      <BoxInform>
        <BoxNameQuantity>
          <NameProduct>{products.name}</NameProduct>
          {productInCart && (
            <QuantityProductChoiced>
              {productInCart.quantity}
            </QuantityProductChoiced>
          )}
        </BoxNameQuantity>
        <InformDescription>{products.description}</InformDescription>
        <BoxInformPriceButton>
          <Informprice>{`R$ ${products.price}`}</Informprice>
          {productInCart ? (
            <InformRemoveItemButton onClick={() => RemoveToCart(products.id)}>
              Remover
            </InformRemoveItemButton>
          ) : (
            <InformAddItemButton onClick={() => setShowModal(true)}>
              Adicionar
            </InformAddItemButton>
          )}
        </BoxInformPriceButton>
        <ModalSelectQuantity
          choiceQuantity={choiceQuantity}
          open={showModal}
          setOpen={setShowModal}
        />
      </BoxInform>
    </ContainerCardProduct>
  );
};
