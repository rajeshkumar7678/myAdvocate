import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/header";
import HowItWorks from "../Components/Howitworks";
import Aboutus from "../Components/Aboutus";
import Services from "../Components/Services";
// import Contact from "./Contact";
// import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
