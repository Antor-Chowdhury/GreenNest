import React from "react";
import Slider from "../components/Slider";
import TopRatedPlants from "../components/TopRatedPlants";
import PlantsCare from "../components/PlantsCare";
import GreenExperts from "../components/GreenExperts";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <Slider></Slider>
      <TopRatedPlants></TopRatedPlants>
      <PlantsCare></PlantsCare>
      <GreenExperts></GreenExperts>
    </div>
  );
};

export default Home;
