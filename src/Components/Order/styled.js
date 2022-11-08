import styled from "styled-components";
import { ReactComponent as Clock } from "../../Assets/clock.svg";

export const MainContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 9.375rem;
  position: fixed;
  bottom: 3.065rem;
  width: 100%;
  background-color: red;
  padding: 0 0 0 2rem;
`;

export const OrderContainerSpace = styled.div`
  height: 3.062rem;
`;

export const ClockStyled = styled(Clock)``;

export const BoxInform = styled.div`
  padding: 0 0.75rem;
`;

export const Title = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: white;
  padding: 0.25rem;
`;

export const RestaurantName = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000;
  padding: 0.25rem;
`;

export const TotalPrice = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  padding: 0.25rem;
`;
