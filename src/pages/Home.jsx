import React from "react";
import ProductList from "../components/Product/ProductList.jsx";
import HeroSection from "../Herosection/Herosection.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductList />
      <Footer />
    </>
  );
};

export default Home;
