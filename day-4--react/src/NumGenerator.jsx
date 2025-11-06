import React from "react";

const value = Math.floor(Math.random() * 99);

function PrimeNum(value) { 
    if (value < 2) return false;
    for (let index = 2; index <= Math.sqrt(value); index++) {
        if (value % index === 0) return false;        
    } return true
}

const NumberBox = ({value}) => {

    let bgColor = " "

    if (PrimeNum(value)) {
        bgColor = "bg-red-500 text-black";
        } else if (value % 2 === 0 ) {
            bgColor = "bg-green-500 text-white";
        } else {
            bgColor = "bg-yellow-500 text-black";
        }
        return (
            <div className={`h-20 flex items-center justify-center text-xl font-bold rounded-lg ${bgColor}`}>
                {value}
            </div>
        )
}
 export default NumberBox




