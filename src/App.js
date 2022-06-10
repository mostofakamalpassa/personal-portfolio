
import "./css/style.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
function App() {
  return (
    <>

    <Routes>
        <Route to="/" element={<HomePage></HomePage>}></Route>
    </Routes>
      <section id="main-wrapper">
        <Navigation></Navigation>
       
      </section>
      <HomePage></HomePage>
     
      <Footer></Footer>
    </>
  );
}

export default App;
