import React from "react";

const RefreshButton = () => {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <button
      onClick={refreshPage}
      className="bg-red-700 text-white text-2xl px-6 py-3 rounded-lg shadow-md hover:bg-red-800 transition"
    >
      REFRESH ME
    </button>
  );
};

export default RefreshButton;
