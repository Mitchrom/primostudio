import styled from "styled-components";

const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: auto;
`;

const StatCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  margin: 15px auto;
  padding: 10px;
  width: 340px;
`;
export { StatCard, StatContainer };
