import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContactContainer = styled.div`
  width: 100%;
  background: #252525;
  height: 500px;
  display: flex;
`;
export const ContactWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const ContactElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ContactElementTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 400;
  color: #ef664d;
`;
export const ContactElementText = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  color: #fff;
`;
export const ContactInputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
export const ContactInput = styled.input`
  padding: 10px;
`;
export const ContactMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContactTextArea = styled.textarea`
  width: 70%;
  height: 100px;
  margin-top: 50px;
`;
export const ContactTextButton = styled.button`
  width: 20%;
  height: 50px;
  color: #ef664d;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;
