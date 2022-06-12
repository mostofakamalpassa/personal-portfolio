
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogPage from "./Pages/BlogPage";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <>
     <section id="main-wrapper">
        <Navigation></Navigation>
       
      </section>
    <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path='/blog' element={<BlogPage></BlogPage>}></Route>
        
        <Route path='/*' element={<NotFound></NotFound>}></Route>
    </Routes>
 
      {/* <HomePage></HomePage> */}
     
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      
    </>
  );
}

export default App;
