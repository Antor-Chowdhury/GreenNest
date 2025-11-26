import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Link } from "react-router";

const PlantOfTheWeek = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setPlants(data[randomIndex]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    <Loading></Loading>;
  }

  return (
    <section className="max-w-6xl mx-auto my-16 p-6 bg-green-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
        🌿 Plant of the Week
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <img
          src={plants?.image}
          alt={plants?.plantName}
          className="w-72 md:w-96 rounded-xl object-cover shadow-md"
        />

        {/* Text */}
        <div className="space-y-4 text-center md:text-left md:w-1/2">
          <h3 className="text-2xl font-semibold text-green-900">
            {plants?.plantName}
          </h3>
          <p className="text-gray-700 leading-relaxed">{plants.description}</p>
          <p className="text-lg font-medium text-green-700">
            Price: <span className="text-gray-900">${plants?.price}</span>
          </p>
          <Link to={`/details/${plants?.plantId}`}>
            <button className="px-6 py-2 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-all">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
