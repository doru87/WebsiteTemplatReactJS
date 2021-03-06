import React from "react";
import {
  ContactContainer,
  ContactElement,
  ContactWrapper,
  ContactElementTitle,
  ContactElementText,
  ContactInput,
  ContactInputWrapper,
  ContactTextArea,
  ContactTextButton,
  ContactMessageWrapper,
} from "./contactElements";
import data from "../data/data.json";

function Contact() {
  return (
    <ContactContainer>
      <ContactWrapper>
        {data.contact.map(function (item, index) {
          return (
            <ContactElement>
              <ContactElementTitle>{item.title}</ContactElementTitle>
              <ContactElementText>{item.text}</ContactElementText>
            </ContactElement>
          );
        })}
        <ContactInputWrapper>
          <ContactInput type="text" placeholder="Name"></ContactInput>
          <ContactInput type="text" placeholder="Email"></ContactInput>
          <ContactInput type="text" placeholder="Phone"></ContactInput>
        </ContactInputWrapper>
        <ContactMessageWrapper>
          <ContactTextArea />
          <ContactTextButton>Send Message</ContactTextButton>
        </ContactMessageWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;
