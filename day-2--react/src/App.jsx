import React from "react";
import kobe from "./assets/kobe_bryant.jpg"
import Lionel from "./assets/Lionel_Messi.jpg"
import Messi from "./assets/messi_.jpg"
import Micheal from "./assets/micheal_jordan.jpg" 

function App() {
const Header = (
  <header>
  
  </header>
)

const Main = (
  <main className="p-6 text-center">
    <h2 className="text-2xl font-bold mb-2">THESE ARE MY GOAT.🐐</h2>

    <p className="text-gray-700 mb-6">
      this are my goat tat i love in the world of sport
    </p>
    {/*the div that hold the images and the text*/}
    <div className=" w-full flex flex-row items-center gap-8 bg-blue-100 p-6 rounded-lg shadow-inner">
      {/*background */}
        <div className="flex flex-col items-center">
          <img src={kobe} alt="Kobe Bryant" className="w-40 rounded-lg shadow-md" />
          <p className="mt-2 font-semibold text-gray-800"> Kobe Bryant</p>
        </div >
        <div className="flex flex-col items-center">
          {/*second images */}
          <img src={Lionel} alt="Messi carring a trouphy" className="w-40 rounded-lg shadow-md" />
          <p className="mt-2 font-semibold text-gray-800">Lionel Messi</p>
        </div>
      <div className="flex flex-col items-center">
        {/*third images */}
          <img src={Messi} alt="Lionel Messi" className="w-40 rounded-lg shadow-md" />
          <p className="mt-2 font-semibold text-gray-800">Lionel Messi</p>
      </div>
      <div className="flex flex-col items-center">
      {/*Fourth images */}
      <img src={Micheal} alt="Micheal Jordan" className="w-40 rounded-lg shadow-md" />
          <p className="mt-2 font-semibold text-gray-800">Micheal Jordan</p>
      </div>

    </div>
  </main>
)

return (
  <div>
    {Header}
    {Main}

  </div>
)
}

export default App