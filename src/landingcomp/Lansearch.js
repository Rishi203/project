import React from "react";
import { TiLocation, TiCalendar, TiTime } from "react-icons/ti";
import { FaCar, FaUser, FaMoneyBillAlt, FaChair } from "react-icons/fa";

const Lansearch = () => {
  return (
    <>
      <div className="bg-black p-4 rounded-lg shadow-md mb-6">
        <div className="flex space-x-4 items-center">
          <TiLocation size={20} color="white" />
          <input type="text" className="border-2 p-2 flex-1" placeholder="From" />
          <TiLocation size={20} color="white" />
          <input type="text" className="border-2 p-2 flex-1" placeholder="To" />
          <TiCalendar size={20} color="white" />
          <input type="date" className="border-2 p-2 flex-1" />
          <TiTime size={20} color="white" />
          <input type="time" className="border-2 p-2 flex-1" />
          <button className="bg-blue-600 text-white p-2 rounded-md">Search</button>
        </div>
      </div>
      <div className="bg-black p-6 rounded-lg shadow-lg mb-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <p className="text-white">
              <TiLocation size={20} color="white" /> Start Location: Model
            </p>
            <p className="text-white">
              <TiLocation size={20} color="white" /> End Location: Grand Mall
            </p>
          </div>

          <div className="flex-1">
            <p className="text-white">
              <FaUser size={20} color="white" /> User: Rajath
            </p>
            <p className="text-white">
              <FaCar size={20} color="white" /> Vehicle Info: Ferrari, red
            </p>
            <p className="text-white">
              <FaChair size={20} color="white" /> Seats Available: 2
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-end">
            <p className="text-white">
              <FaMoneyBillAlt size={20} color="white" /> Price: 100
            </p>
            <button className="bg-[#ADFF45] px-8 rounded-xl text-lg hover:bg-[#aeff45ed] h-10">
              Book ride
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lansearch;
