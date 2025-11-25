import React from "react";

const experts = [
  {
    id: 1,
    name: "Elena Marquez",
    specialization: "Indoor Plant Care & Propagation",
    image: "https://i.ibb.co.com/603w7n3x/expert-1-1.jpg",
  },
  {
    id: 2,
    name: "Daniel Foster",
    specialization: "Soil Nutrition & Fertilization",
    image: "https://i.ibb.co.com/twyJTVv8/expert-2.jpg",
  },
  {
    id: 3,
    name: "Maya Thompson",
    specialization: "Lighting & Environment Optimization",
    image: "https://i.ibb.co.com/LD98m54Q/expert-3.jpg",
  },
];

const GreenExperts = () => {
  return (
    <div className="bg-[#0f4229]">
      <div className="w-full md:w-[80%] mx-auto py-12 px-3 md:px-0">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Meet Our Green Experts
        </h2>
        <p className="text-center mb-10 text-white text-lg">
          Our team of passionate plant experts is here to guide you to a
          thriving indoor garden.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-[#28553f] rounded-xl shadow-md overflow-hidden text-white p-4"
            >
              <img
                src={expert.image}
                alt={expert.title}
                className="w-full h-50 md:h-72 object-cover rounded-md"
              />

              <div className="p-6 text-center">
                <h3 className="font-bold text-xl">{expert.name}</h3>
                <p className="text-white text-base md:font-medium mt-1">
                  {expert.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GreenExperts;
