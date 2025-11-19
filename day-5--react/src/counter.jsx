import { useState } from "react";



const Counter = () => {

  const [count, setcount] = useState(0);

  function Increment() {
    setcount(count + 1);
  }

  function Decrement() {
    setcount(count - 1);
  }

  return (
    <div 
    className="w-80 h-80 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-7xl font-extrabold text-gray-800 mb-100">{count}</h1>

    <div className="flex gap-6">

      <button onClick={Increment} 
      className="bg-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-600 active: :scale-95 transition" 
      >Increment</button>


      <button onClick={Decrement}
      className="bg-red-500 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-red-600 active: :scale-95 transition"
      >Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
