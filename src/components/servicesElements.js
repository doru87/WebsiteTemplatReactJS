import styled from "styled-components";
import down from "../images/down.jpg";
import up from "../images/up.jpg";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  margin-top: 100px;
  margin-bottom: 150px;
`;
export const ServicesWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const ServicesTitle = styled.h1`
  font-weight: bold;
  text-align: center;
  color: #2e3e4e;
`;
export const ServicesDescription = styled.p`
  font-size: 16px;
  padding: 50px;
  text-align: center;
`;
export const ServicesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
`;
export const ServicesElement = styled.div`
  margin-top: 10px;
  padding: 10px;
  text-align: center;
`;
export const ServicesElementImage = styled.img``;
export const ServicesElementTitle = styled.h2``;
export const ServicesElementDescription = styled.div``;
export const OpenIcon = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${down});
  background-repeat: no-repeat;
  color: #000;
  cursor: pointer;
  display: ${({ className, activeindex }) =>
    activeindex.some((el) => className.includes(el)) ? "none" : "block"};
`;

export const CloseIcon = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${up});
  background-repeat: no-repeat;
  color: #000;
  font-size: 50px;
  cursor: pointer;
  display: ${({ className, activeindex }) =>
    activeindex.some((el) => className.includes(el)) ? "block" : "none"};
`;
export const ServicesElementDescriptionDisplay = styled.p`
  font-size: 16px;
  background-color: #2e3e4e;
  color: #fff;
  height: 80px;
  text-align: center;
`;
