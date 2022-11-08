import styled from "styled-components";

import { ReactComponent as Home } from "../../Assets/homepage.svg";
import { ReactComponent as Avatar } from "../../Assets/avatar.svg";
import { ReactComponent as Cart } from "../../Assets/shopping-cart.svg";

export const MainContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 3.062rem;
  box-shadow: 0 -1px 3p 0 rgba(0, 0, 0, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 3p 0 rgba(0, 0, 0, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
`;

export const MenuContainerSpace = styled.div`
  height: 3.062rem;
`;

export const AvatarStyled = styled(Avatar)`
  fill: ${(p) => (p.pageCurrent ? "red" : "B8B8B8")};
`;

export const HomeStyled = styled(Home)`
  fill: ${(p) => (p.pageCurrent ? "red" : "B8B8B8")};
`;

export const CartStyled = styled(Cart)`
  fill: ${(p) => (p.pageCurrent ? "red" : "B8B8B8")};
`;
