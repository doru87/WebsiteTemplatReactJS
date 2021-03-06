import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../images/banner.jpg";
import left from "../images/left.svg";
import right from "../images/right.svg";

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
`;
export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  //   margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
export const SliderLinksList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 50px;
`;

export const SliderLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin-left: 20px;
  margin-bottom: 30px;
`;

export const SliderMessageContainer = styled.div`
  display: flex;
  position: relative;
  width: 90%;
  height: 300px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
export const SliderMessage = styled.p`
  display: flex;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;
export const SliderMessageLeft = styled.div`
  background-image: url(${left});
  position: absolute;
  left: 0;
  width: 50px;
  height: 50px;
  background-size: cover;
`;
export const SliderMessageRight = styled.div`
  background-image: url(${right});
  position: absolute;
  right: 0;
  width: 50px;
  height: 50px;
  background-size: cover;
`;
