import styled from "styled-components";

const YELLOW = "#FCDA69";

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

const FootUp = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  width: 100%;
`;

const FootDown = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${YELLOW};
  width: 100%;
`;

const DivContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 2px solid gray;

  img {
    margin-right: 10px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  margin: 8px auto;
`;

const FootLink = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  width: 95%;
  height: 100px;
  margin: 20px auto 25px auto;

  div {
    text-align: start;
    margin: auto 0;
  }
`;

export { Footer, FootUp, FootDown, DivContact, SocialMedia, FootLink };
