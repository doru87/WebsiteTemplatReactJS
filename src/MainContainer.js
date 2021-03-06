import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import WorksPage from "./WorksPage";

function MainContainer() {
  return (
    <Switch>
      <Route exact path="/" component={AboutPage} />
      <Route path="/works" component={WorksPage} />
      <Route path="/services" component={ServicesPage} />
    </Switch>
  );
}

export default MainContainer;
