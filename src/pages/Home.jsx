import React from "react";
import Slider from "../components/Slider";
import TopRatedPlants from "../components/TopRatedPlants";
import PlantsCare from "../components/PlantsCare";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <Slider></Slider>
      <TopRatedPlants></TopRatedPlants>
      <PlantsCare></PlantsCare>
    </div>
  );
};

export default Home;
