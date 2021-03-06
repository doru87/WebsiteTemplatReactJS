import React from "react";
import {
  AboutContainer,
  AboutDescription,
  AboutImage,
  AboutWrapper,
  SkillsBarPercentage,
  Skills,
  SkillsBar,
  SkillsWrapper,
} from "./aboutElements";
import logo from "../images/pic-9.jpg";
import data from "../data/data.json";

import { useAnimateKeyframes } from "react-simple-animate";

function About() {
  const { play, style } = useAnimateKeyframes({
    iterationCount: 1,
    duration: 3,
    keyframes: ["transform: translateX(0))", "transform: translateX(300px)"],
  });

  React.useEffect(() => {
    play();
  }, []);
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutImage src={logo}></AboutImage>
        <AboutDescription>
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
          ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus a sit amet mauris. .
        </AboutDescription>
      </AboutWrapper>
      <SkillsWrapper>
        <Skills>
          {data.skills.map(function (item, index) {
            return (
              <>
                <SkillsBarPercentage style={style}>
                  {item.title}
                  <SkillsBar percentage={item.percentage}>
                    {item.percentage}
                  </SkillsBar>
                </SkillsBarPercentage>
              </>
            );
          })}
        </Skills>
      </SkillsWrapper>
    </AboutContainer>
  );
}

export default About;
