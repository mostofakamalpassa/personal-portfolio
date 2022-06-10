import React from "react";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home";
import Portfolio from "../../components/Portfolio/Portfolio";
import Resume from "../../components/Resume/Resume";
import Service from "../../components/Service/Service";

const HomePage = () => {
  return (
    <div>
      <section id="content" role="main">
        <Home></Home>
        <About></About>
        <Service></Service>
        <Resume></Resume>
        <Portfolio></Portfolio>
        {/* <Testimonial></Testimonial> */}
        <Contact></Contact>
      </section>
    
    </div>
  );
};

export default HomePage;
