import { useState } from "react";

const App = () => {
  const [position, setPosition] = useState(0);

  const positions = [
    "top-4 left-4",
    "top-4 right-4",
    "bottom-4 left-4",
    "bottom-4 right-4"
  ];

  const moveButton = () => {
    setPosition((prev) => (prev + 1) % positions.length);
  };

  return (
    <div className="relative h-screen bg-gray-100">

      <button
        onClick={moveButton}
        className={`absolute ${positions[position]} p-3 bg-blue-500 text-white`}>
        Move Me
      </button>

    </div>
  );
};

export default App;
