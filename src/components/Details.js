import React from "react";
import { FaCar, FaUser, FaRupeeSign, FaChair, FaClock } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";

function Details() {
  return (
    <>
      <div className="bg-black p-8 rounded-3xl shadow-xl mb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-6">
          <p className="text-white flex flex-row items-center text-lg mb-5">
            <TiLocation size={20} color="white" className="mr-3" /> Start
            Location: Model
          </p>
          <p className="text-white flex flex-row items-center text-lg">
            <TiLocation size={20} color="white" className="mr-3" /> End
            Location: Grand Mall
          </p>
        </div>
        <div className="flex flex-col space-y-6">
          <p className="text-white flex flex-row items-center text-lg mb-5">
            <FaCar size={20} color="white" className="mr-3" /> Vehicle Info:
            Ferrari, red
          </p>
          <p className="text-white flex flex-row items-center text-lg">
            <FaChair size={20} color="white" className="mr-3" /> Seats
            Available: 2
          </p>
        </div>
        <div className="flex flex-col space-y-6">
          <p className="text-white flex flex-row items-center text-lg mb-5">
            <FaRupeeSign size={20} color="white" className="mr-3" /> Price: 100
          </p>
          <p className="text-white flex flex-row items-center text-lg">
            <FaClock size={20} color="white" className="mr-3" /> Time: 12:30
          </p>
        </div>

        <div className="flex flex-col space-y-6 md:col-span-1 items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <FaUser size={24} color="black" />
            </div>
            <p className="text-white ml-3  text-lg">Rajath</p>
          </div>
          <button className="bg-[#ADFF45] px-8 rounded-xl text-lg hover:bg-[#aeff45ed] h-10">
            Book ride
          </button>
        </div>
      </div>
    </>
  );
}

export default Details;
