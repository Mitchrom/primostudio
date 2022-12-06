import styled from "styled-components";

const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;

  @media (min-width: 769px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const PresentationImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin: 0 auto;

  @media (min-width: 769px) {
    margin: 0;
    width: 50%;
  }
`;

const PresentationTxt = styled.div`
  max-width: 100%;
  height: fit-content;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 769px) {
    margin: auto auto auto 60px;
    padding: 0;
    width: 50%;
  }
`;

const BlueLine = styled.div`
  width: 100px;
  height: fit-content;
  margin: 0 auto;

  @media (min-width: 769px) {
    width: 175px;
  }
`;

export { Presentation, PresentationImg, PresentationTxt, BlueLine };
