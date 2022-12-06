import styled from "styled-components";

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: auto;
`;
const Service = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  margin: 20px auto;
  box-shadow: 0px 3px 4px 0px;
`;

const ServiceTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const ServiceTxt = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
`;

export { Service, ServiceTitle, ServiceTxt, ServicesContainer };
