import React from "react";
import Home from "./pages/home";
import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Service from "./pages/Service";
// import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        {/* <Route path="/about" component={<About/>}></Route>
        <Route path="/contact" component={<con/>}></Route> */}
        {/* <Route path="/service" component={Service}></Route> */}
        {/* <Route component={Error}></Route> */}
      </Routes>
    </>
    // <Navbar/>
  );
};

export default App;
