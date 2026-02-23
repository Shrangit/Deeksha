"use client";

import React from "react";

const MapLove = () => {
  const mapWidth = 1100;
  const mapHeight = 650;

  const locations = [
    {
      name: "Manali",
      x: 470,
      y: 140,
      description: "Snow, smiles & unforgettable memories ❄️❤️",
      offset: { dx: 0, dy: -40 },
    },
    {
      name: "Udaipur",
      x: 380,
      y: 240,
      description: "City of lakes & royal sunsets 🌅",
      offset: { dx: -120, dy: 10 },
    },
    {
      name: "Arunachal Pradesh",
      x: 760,
      y: 180,
      description: "Lost in clouds & mountains ☁️⛰️",
      offset: { dx: 120, dy: 10 },
    },
    {
      name: "Lucknow",
      x: 550,
      y: 220,
      description: "Where stories feel like home 🏡",
      offset: { dx: 0, dy: 40 },
    },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-16">
      <div
        className="relative border rounded-xl overflow-hidden shadow-xl bg-white"
        style={{ width: mapWidth, height: mapHeight }}
      >
        {/* MAP */}
        <img
          src="/images/india-map.png"
          alt="India map"
          className="w-full h-full object-contain"
        />

        {/* MARKERS */}
        {locations.map((loc, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: loc.x,
              top: loc.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* PIN */}
            <div className="text-red-500 text-2xl animate-bounce">📍</div>

            {/* LABEL */}
            <div
              className="absolute bg-white px-3 py-2 text-xs rounded-lg shadow-lg border border-gray-200 w-max"
              style={{
                transform: `translate(${loc.offset.dx}px, ${loc.offset.dy}px)`,
              }}
            >
              <div className="font-semibold text-gray-800">
                {loc.name}
              </div>
              <div className="text-gray-600 text-[11px]">
                {loc.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapLove;