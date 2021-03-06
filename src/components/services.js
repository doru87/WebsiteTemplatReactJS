import React, { useRef } from "react";
import {
  ServicesContainer,
  ServicesDescription,
  ServicesElement,
  ServicesElementDescription,
  ServicesElementImage,
  ServicesElementTitle,
  ServicesItems,
  ServicesTitle,
  ServicesWrapper,
  OpenIcon,
  CloseIcon,
  ServicesElementDescriptionDisplay,
} from "./servicesElements";
import data from "../data/data.json";

function Services() {
  const [showDescription, setShowDescription] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState([]);
  const [updatedIndexes, setUdpatedIndexes] = React.useState([]);

  const descriptionRef = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  React.useEffect(() => {
    setActiveIndex(updatedIndexes);
  }, [updatedIndexes]);

  const openDescription = (id, index) => {
    const filterService = data.services.filter((service) => service.id === id);

    descriptionRef.current[index].current.innerHTML =
      filterService[0].description;

    setUdpatedIndexes((updatedIndexes) =>
      updatedIndexes.indexOf(index) === -1
        ? [...updatedIndexes, index]
        : [...updatedIndexes]
    );
  };

  const closeDescription = (id, index) => {
    descriptionRef.current[index].current.innerHTML = "";
    var updateIndexes = activeIndex.filter((item) => item !== index);
    setUdpatedIndexes(updateIndexes);
  };

  return (
    <ServicesContainer>
      <ServicesWrapper>
        <ServicesTitle>Services</ServicesTitle>
        <ServicesDescription>
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
          nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
          odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
          ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
        </ServicesDescription>
        <ServicesItems>
          {data.services.map(function (item, index) {
            return (
              <ServicesElement key={item.id}>
                <ServicesElementImage
                  src={require(`../images/${item.image}`).default}
                ></ServicesElementImage>
                <ServicesElementTitle>{item.title}</ServicesElementTitle>
                <ServicesElementDescription>
                  <OpenIcon
                    className={`open${index}`}
                    activeindex={activeIndex}
                    onClick={() => openDescription(item.id, index)}
                  ></OpenIcon>
                  <CloseIcon
                    className={`close${index}`}
                    activeindex={activeIndex}
                    onClick={() => closeDescription(item.id, index)}
                  ></CloseIcon>
                  <ServicesElementDescriptionDisplay
                    showDescription={showDescription}
                    ref={descriptionRef.current[index]}
                  ></ServicesElementDescriptionDisplay>
                </ServicesElementDescription>
              </ServicesElement>
            );
          })}
        </ServicesItems>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
