
import "./css/style.css";
import Navigation from "./components/Navigation/Navigation";

import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogPage from "./Pages/BlogPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";

import NotFound from "./Pages/NotFound";
import ContactPage from "./Pages/ContactPage";
import Resume from "./components/Resume/Resume";
import WhatImDoing from "./Pages/WhatImDoing/WhatImDoing";
function App() {
  return (
    <>
     <section id="main-wrapper">
        <Navigation></Navigation>
       
      </section>
    <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path='/blog' element={<BlogPage></BlogPage>}></Route>
        <Route path='/portfolios' element={<PortfolioPage></PortfolioPage>}></Route>
        <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/testimonial' element={<WhatImDoing></WhatImDoing>}></Route>
        
        <Route path='/*' element={<NotFound></NotFound>}></Route>
    </Routes>
 
      {/* <HomePage></HomePage> */}
     
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      
    </>
  );
}

export default App;
