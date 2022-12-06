import styled from "styled-components";

const HeaderDesktop = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    min-width: 350px;
  }
`;

const HeaderMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    display: none;
  }
`;

export { HeaderDesktop, HeaderMobile };
