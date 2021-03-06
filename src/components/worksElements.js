import styled from "styled-components";
import { Link } from "react-router-dom";

export const WorksContainer = styled.div`
  width: 100%;
  background: #2e3e4e;
  height: 600px;
  color: #fff;
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 100px;
  margin-bottom: 150px;
`;
export const WorksWrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;
export const WorksList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;
export const WorksImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const WorksCategory = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;
export const WorksCategoryLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin-left: 20px;
  margin-bottom: 30px;
`;
