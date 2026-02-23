"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

type Place = {
  name: string;
  coordinates: [number, number];
  note: string;
};

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const places: Place[] = [
  {
    name: "Lucknow",
    coordinates: [80.9462, 26.8467],
    note: "Where her story begins 🌸",
  },
  {
    name: "Arunachal Pradesh",
    coordinates: [94.7278, 28.2180],
    note: "Lost in clouds & mountains ☁️⛰️",
  },
  {
    name: "Mussoorie",
    coordinates: [78.07, 30.4598],
    note: "Walking through the misty hills 🌫️",
  },
  {
    name: "Manali",
    coordinates: [77.1887, 32.2396],
    note: "Snow, smiles & unforgettable memories ❄️",
  },
  {
    name: "Udaipur",
    coordinates: [73.7125, 24.5854],
    note: "City of lakes & royal sunsets 🌅",
  },
];

export default function TravelMap() {
  return (
    <div className="w-full flex justify-center h-[520px]">
      <ComposableMap
        projectionConfig={{ scale: 420 }}
        center={[80, 25]}
        style={{ width: "100%", height: "100%" }}
      >
        {/* 🌍 Map */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#F3F4F6",
                    outline: "none",
                  },
                  hover: {
                    fill: "#E5E7EB",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#D1D5DB",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* 📍 Markers */}
        {places.map((place, index) => (
          <Marker key={index} coordinates={place.coordinates}>
            {/* dot */}
            <circle
              r={6}
              fill="#C4A484"
              stroke="#fff"
              strokeWidth={2}
              className="transition-transform duration-300 hover:scale-125"
            />

            {/* place name */}
            <text
              textAnchor="middle"
              y={-18}
              style={{
                fontFamily: "serif",
                fill: "#374151",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {place.name}
            </text>

            {/* cute note */}
            <text
              textAnchor="middle"
              y={22}
              style={{
                fontFamily: "serif",
                fill: "#6B7280",
                fontSize: "10px",
              }}
            >
              {place.note}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}