import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutContainer = styled.div`
  width: 100%;
  background: #150f0f;
  height: 40%;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 100px;
  margin-bottom: 150px;
`;
export const AboutWrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
`;
export const AboutImage = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 100px;
`;
export const AboutDescription = styled.div`
  margin-left: 50px;
`;
export const SkillsWrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
`;
export const Skills = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const SkillsBar = styled.div`
  width: ${(props) => props.percentage};
  height: 20px;
  background: #913030;
  padding: 10px;
`;
export const SkillsBarPercentage = styled.p`
  font-weight: bold;
`;
