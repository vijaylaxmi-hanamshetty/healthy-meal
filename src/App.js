import React  from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import WhyChoose from "./components/whyChoose/WhyChoose";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer"

const App = () => {
  
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
       <WhyChoose/>
      <About/> 
    
       <Footer/>
    </div>
  );
};

export default App;
