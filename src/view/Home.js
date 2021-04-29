import React from "react";
import Hero from "./../components/Home";
import Newsletter from "../components/NewLetter";
import Footer from "../components/Footer";
import Cta from "./../components/Cta";
import Grid from "./../components/Grid";
const Home = () => {
  return (
    <div>
      <Hero />
      <Grid />
      {/* <Cta /> */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
