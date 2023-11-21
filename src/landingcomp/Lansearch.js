import React from "react";
import { TiLocation, TiCalendar, TiTime } from "react-icons/ti";
// import { FaCar, FaUser, FaMoneyBillAlt, FaChair } from "react-icons/fa";
import Details from "../components/Details";

const Lansearch = () => {
  return (
    <>
      <div className="bg-black p-4 rounded-2xl shadow-md mb-6">
        <div className="flex space-x-4 items-center">
          <TiLocation size={20} color="white" />
          <input
            type="text"
            className="border-2 p-2 flex-auto rounded-xl"
            placeholder="From"
          />
          <TiLocation size={20} color="white" />
          <input
            type="text"
            className="border-2 p-2 flex-auto rounded-xl"
            placeholder="To"
          />
          <TiCalendar size={20} color="white" />
          <input type="date" className="border-2 p-2 flex-auto rounded-xl" />
          <TiTime size={20} color="white" />
          <input type="time" className="border-2 p-2 flex-auto rounded-xl" />
          <button className="bg-blue-600 text-white p-2 rounded-xl flex-auto hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
      <Details />
    </>
  );
};

export default Lansearch;
