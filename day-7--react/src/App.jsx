import { useState } from "react";
import rain from "./assets/rain.png";
import snow from "./assets/snow.jpg";
import sunny from "./assets/sunny.jpg";

const App = () => {
  const backgrounds = [null, rain, snow, sunny];
  const [currentClimate, setCurrentClimate] = useState(0);

  // Optional: you can keep a climates array for reference
  const climates = ["null", "rain", "snow", "sunny"];
  const selectedClimate = climates[currentClimate];

  // Optional helper function
  const changeClimate = (index) => setCurrentClimate(index);

  return (
    <div
      className="w-full h-screen bg-center bg-cover transition-all duration-700"
      style={{
        backgroundImage: backgrounds[currentClimate]
          ? `url(${backgrounds[currentClimate]})`
          : "none",
        backgroundColor: backgrounds[currentClimate] ? "transparent" : "white",
      }}
    >
      {/* Buttons container fixed at the top */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
        <button
          onClick={() => changeClimate(1)}
          className="p-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-colors"
        >
          RAIN
        </button>
        <button
          onClick={() => changeClimate(2)}
          className="p-2 bg-gray-500 text-white rounded shadow hover:bg-gray-600 transition-colors"
        >
          SNOW
        </button>
        <button
          onClick={() => changeClimate(3)}
          className="p-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600 transition-colors"
        >
          SUNNY
        </button>
      </div>
    </div>
  );
};

export default App;
