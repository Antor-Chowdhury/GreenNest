import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const PlantDetails = () => {
  const { id } = useParams();
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const findResult = plants.find((plant) => plant.plantId === Number(id));

  if (loading) {
    return <Loading></Loading>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.reset();

    toast.success("Consultation booked successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="bg-white rounded-lg p-5 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <figure className="shrink-0">
            <img
              src={findResult?.image}
              alt={findResult?.plantName}
              className="rounded-xl w-72 md:w-96 object-contain"
            />
          </figure>

          <div className="space-y-4 w-full md:w-1/2 text-center md:text-left ">
            <h2 className="text-4xl font-bold text-green-800">
              {findResult?.plantName}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-green-900 text-lg">
                Description:
              </span>{" "}
              {findResult?.description}
            </p>
            <div className="space-y-2 text-lg">
              <p className="font-semibold text-green-700">
                Price:{" "}
                <span className="text-gray-900">${findResult?.price}</span>
              </p>
              <p className="font-semibold text-green-700">
                Ratings:{" "}
                <span className="text-gray-900">{findResult?.rating} ⭐</span>
              </p>
              <p className="font-semibold text-green-700">
                Available Stock:{" "}
                <span className="text-gray-900">
                  {findResult?.availableStock}
                </span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full px-8 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition-all"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
