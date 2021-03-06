import React from "react";
import {
  SliderContainer,
  SliderLinksList,
  SliderWrapper,
  SliderLink,
  SliderMessageContainer,
  SliderMessage,
} from "./sliderElements";
import data from "../data/data.json";
import AnimatedSlider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

function Slider() {
  return (
    <SliderContainer>
      <SliderWrapper>
        <SliderLinksList>
          <SliderLink to="/">About</SliderLink>
          <SliderLink to="/works">Works</SliderLink>
          <SliderLink to="/services">Services</SliderLink>
        </SliderLinksList>
        <SliderMessageContainer>
          <AnimatedSlider>
            {data.slider.map(function (item, index) {
              return <SliderMessage key={item.id}>{item.text}</SliderMessage>;
            })}
          </AnimatedSlider>
        </SliderMessageContainer>
      </SliderWrapper>
    </SliderContainer>
  );
}

export default Slider;
