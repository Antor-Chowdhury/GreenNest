import React from "react";

const tips = [
  {
    id: 1,
    title: "Watering Tips",
    image: "https://i.ibb.co.com/HfFbcRbH/watering.jpg",
    description:
      "Most indoor plants prefer evenly moist soil, but not soggy. Allow the top 1–2 inches of soil to dry before watering again. Always use room-temperature water and ensure proper drainage to prevent root rot.",
  },
  {
    id: 2,
    title: "Sunlight Tips",
    image: "https://i.ibb.co.com/4RzY6Zdx/sunlight.jpg",
    description:
      "Place your plants near bright, indirect light—like beside a window with filtered sun. Rotate the pot every few days to help the plant grow evenly, and avoid harsh direct sunlight that can scorch delicate leaves.",
  },
  {
    id: 3,
    title: "Fertilizing Tips",
    image: "https://i.ibb.co.com/CKk51vw1/fertilizing.webp",
    description:
      "Feed your plants with a balanced liquid fertilizer once a month during the active growing season. Start with a diluted mix to avoid over-fertilizing, and skip feeding during winter when plant growth naturally slows.",
  },
];

const PlantsCare = () => {
  return (
    <div className="w-full md:w-[80%] mx-auto my-10 px-3 md:px-0">
      <h2 className="text-3xl font-bold text-center mb-8">
        Green Care Essentials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            <img
              src={tip.image}
              alt={tip.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-base">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantsCare;
