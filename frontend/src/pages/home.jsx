import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import HowItWorks from "../Components/Howitworks";
import Aboutus from "../Components/Aboutus";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
