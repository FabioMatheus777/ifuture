import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 2.75rem;
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  padding: 0 1rem;
  justify-items: center;
  align-items: center;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  grid-column-start: 2;
`;
