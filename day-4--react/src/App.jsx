import React from "react";
import NumberBox from "./NumGenerator";
import RefreshButton from "./Refresh";
import Header from "./Header"

const App = () => {
    const numbers = Array.from({length:100}, () => Math.floor(Math.random() * 100));
    
    return (
        <div>

        <Header/>

    
        <div className="grid grid-cols-10 gap-2">
            {numbers.map((number, index) => (
                <NumberBox key={index} value={number} />
            )) }
        </div>
        <div className="flex items-center justify-center m-7">

            <RefreshButton />
        </div>

        
    </div>
    )
}

export default App