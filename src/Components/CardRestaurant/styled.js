import styled from "styled-components";

export const ContainerCardRestaurant = styled.div`
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 0.5rem 0;
`;

export const ImageRestaurant = styled.img`
  width: 100%;
  border-radius: 7px 7px 0 0;
`;

export const NameRestaurant = styled.h3`
  width: 18.5rem;
  height: 1.125rem;
  margin: 0.75rem 1rem 0.25rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
`;

export const BoxInformTimePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InformTimePrice = styled.p`
  margin: 0.75rem 1rem 0.25rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: gray;
`;
