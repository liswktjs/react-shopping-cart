import styled from 'styled-components';
import PALETTE from '../../constants/palette';
import { INNER_TEMPLATE_WIDTH } from '../../constants/style';

export const NavigationBarContainer = styled.div`
  background-color: ${PALETTE.BAE_MINT[500]};
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

export const NavigationBarInnerContainer = styled.div`
  width: ${INNER_TEMPLATE_WIDTH};
  min-width: ${INNER_TEMPLATE_WIDTH};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  color: white;
  font-size: 2.5rem;
  justify-content: space-between;
  align-items: center;

  img {
    width: 3rem;
    margin-right: 1.25rem;
  }
`;

export const NavLinkContainer = styled.div`
  a {
    color: white;
    margin-left: 1.5rem;
  }
`;
