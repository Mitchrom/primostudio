import styled from "styled-components";

const FootBtn = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  padding: 3px;
  margin: 15px 0px;
  background-color: white;
  color: black;
`;

const BtnAccueil = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: blue;
  color: white;
  margin: 25px 0px;
`;

const BLUE = "#2739B0";

const BtnHeader = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${BLUE};
  border-radius: 4px;
  color: ${BLUE};
  background-color: white;
  padding: 2px 7.5px;

  @media (max-width: 768px) {
    margin-right: 15px;
  }
`;

export { FootBtn, BtnAccueil, BtnHeader };
