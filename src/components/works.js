import React, { useRef } from "react";
import {
  WorksCategory,
  WorksCategoryLink,
  WorksContainer,
  WorksImage,
  WorksList,
  WorksWrapper,
} from "./worksElements";
import data from "../data/data.json";

function Works() {
  const categoryRef1 = useRef();
  const categoryRef2 = useRef();
  const categoryRef3 = useRef();
  const categoryRef4 = useRef();
  const categoryRef5 = useRef();

  const [worksState, setWorksState] = React.useState([]);
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    setWorksState(list);
  }, [list]);

  React.useEffect(() => {
    if (categoryRef1.current.innerHTML === "All") {
      var worksList = data.works;
      setWorksState(worksList);
    }
  }, []);

  const SelectCategory = (categoryRef) => {
    const category = categoryRef.current.innerHTML;
    var worksList = [];
    if (categoryRef.current.innerHTML === "All") {
      worksList = data.works;
    } else {
      worksList = data.works.filter(
        (item) => item.category == category.toLowerCase()
      );
    }
    setList(worksList);
  };

  return (
    <WorksContainer>
      <WorksWrapper>
        <WorksCategory>
          <WorksCategoryLink
            to={"/works"}
            ref={categoryRef1}
            onClick={() => SelectCategory(categoryRef1)}
          >
            All
          </WorksCategoryLink>
          <WorksCategoryLink
            to={"/works"}
            ref={categoryRef2}
            onClick={() => SelectCategory(categoryRef2)}
          >
            Branding
          </WorksCategoryLink>
          <WorksCategoryLink
            to={"/works"}
            ref={categoryRef3}
            onClick={() => SelectCategory(categoryRef3)}
          >
            Web Design
          </WorksCategoryLink>
          <WorksCategoryLink
            to={"/works"}
            ref={categoryRef4}
            onClick={() => SelectCategory(categoryRef4)}
          >
            Print
          </WorksCategoryLink>
          <WorksCategoryLink
            to={"/works"}
            ref={categoryRef5}
            onClick={() => SelectCategory(categoryRef5)}
          >
            Photography
          </WorksCategoryLink>
        </WorksCategory>
        <WorksList>
          {worksState.map(function (work, index) {
            return (
              <WorksImage
                src={require(`../images/${work.name}`).default}
              ></WorksImage>
            );
          })}
        </WorksList>
      </WorksWrapper>
    </WorksContainer>
  );
}

export default Works;
