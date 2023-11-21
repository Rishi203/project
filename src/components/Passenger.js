import React from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

function Passenger() {
  return (
    <>
      <div className=""></div>
      <div className="bg-black p-8 rounded-3xl shadow-xl mb-1 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <FaUser size={24} color="black" />
          </div>
          <p className="text-white ml-3 text-lg">XYZZZ</p>
        </div>
        <div className="flex items-center">
          <FaPhone
            size={20}
            color="white"
            className="mr-3"
            style={{ transform: "rotateY(180deg)" }}
          />
          <p className="text-white text-lg">9012347856</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope size={20} color="white" className="mr-3" />
          <p className="text-white text-lg">xyz@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Passenger;
