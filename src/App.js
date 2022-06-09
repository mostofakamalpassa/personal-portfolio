import logo from "./logo.svg";
import { Row } from "react-bootstrap";

import "./css/style.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <section id="main-wrapper">
        <Navigation></Navigation>
      </section>
      <section id="content" role="main">
        <Home></Home>
        <About></About>
        <Service></Service>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </section>
    </>
  );
}

export default App;
