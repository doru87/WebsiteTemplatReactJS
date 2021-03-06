import logo from "./logo.svg";
import "./App.css";
import About from "./components/about";
import Works from "./components/works";
import { BrowserRouter as Router } from "react-router-dom";
import MainContainer from "./MainContainer";

function App() {
  return (
    <Router>
      <MainContainer />
    </Router>
  );
}

export default App;
