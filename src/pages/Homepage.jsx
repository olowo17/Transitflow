import React from "react";
import Contact from "../componets/Contact";
import Navbar from "../utilities/NavBar";
import Banner from "../componets/Banner";
import WhyUs from "../componets/WhyUs";
import Transporting from "../componets/Transporting";
import Services from "../componets/Services";
import Footer from "../utilities/Footer";
const Homepage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <WhyUs />
      <Transporting />
    </div>
  );
};

export default Homepage;
