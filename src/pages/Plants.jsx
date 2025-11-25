import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Plants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("./plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-linear-to-r from-[#e3f7da] to-[#8dab7d] py-10">
      <div>
        <title>Plants</title>
      </div>
      <div className="w-full md:w-[80%] mx-auto flex flex-col justify-center px-4 ">
        <div>
          <h2 className="font-bold text-3xl  text-center mb-8">
            All Available Plants
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plants.map((plant) => (
            <div key={plant.plantId} className="card bg-base-100 w-full ">
              <figure className="px-3 md:px-10 pt-3 md:pt-10">
                <img
                  src={plant?.image}
                  alt={plant?.plantName}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{plant?.plantName}</h2>
                <p className="font-medium">Price: {plant?.price}$</p>
                <p className="font-medium">Ratings: {plant?.rating}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/" className="flex justify-center items-center mt-5">
          <button className="btn btn-primary">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Plants;
