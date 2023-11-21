import React from "react";
import { FaCar, FaUser, FaRupeeSign, FaChair, FaClock } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import Passenger from "../components/Passenger";

const Lanpool = () => {
  return (
    <>
      <div className="">
        <div className="bg-black p-8 rounded-3xl shadow-xl mb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-6">
            <p className="text-white flex flex-row items-center text-lg">
              <TiLocation size={20} color="white" className="mr-3" /> Start
              Location: Model
            </p>
            <p className="text-white flex flex-row items-center text-lg">
              <TiLocation size={20} color="white" className="mr-3" /> End
              Location: Grand Mall
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <p className="text-white flex flex-row items-center text-lg">
              <FaCar size={20} color="white" className="mr-3" /> Vehicle Info:
              Ferrari, red
            </p>
            <p className="text-white flex flex-row items-center text-lg">
              <FaChair size={20} color="white" className="mr-3" /> Seats
              Available: 2
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <p className="text-white flex flex-row items-center text-lg">
              <FaRupeeSign size={20} color="white" className="mr-3" /> Price:
              100
            </p>
            <p className="text-white flex flex-row items-center text-lg">
              <FaClock size={20} color="white" className="mr-3" /> Time: 12:30
            </p>
          </div>

          <div className="flex flex-col space-y-6 md:col-span-1 items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mt-3">
                <FaUser size={24} color="black" />
              </div>
              <p className="text-white ml-3 mt-3 text-lg">Rajath</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-extrabold text-xl mb-3 ml-4">PASSENGERS</h1>
          <Passenger />
          <Passenger />
          <Passenger />
        </div>
      </div>
    </>
  );
};

export default Lanpool;
