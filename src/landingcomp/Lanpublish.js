import React from "react";

const Lanpublish = () => {
  return (
    <>
      <div className="text-4xl font-extrabold text-black p-2 pr-40 mx-auto mb-10">
        PUBLISH RIDES
      </div>
      <div className="grid grid-cols-2 gap-8 ml-20">
        <div className="flex flex-row">
          <div className="trip-details">
            <input
              type="text"
              id="from"
              name="from"
              placeholder="Enter From"
              className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
            />

            <input
              type="text"
              id="to"
              name="to"
              placeholder="Enter To"
              className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
            />

            <input
              type="text"
              id="startDate"
              placeholder="Start Date"
              name="startDate"
              className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
            />

            <input
              type="text"
              id="startTime"
              name="startTime"
              placeholder="Start Time"
              className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
            />

            <input
              type="number"
              id="seatsAvailable"
              name="seatsAvailable"
              placeholder="Enter Seats Available"
              className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
            />

            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter Price"
              className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
            />
          </div>
          <div>
            <h className="font-extrabold text-2xl ml-56">VEHICLE DETAILS</h>
            <div className="vehicle-details ml-52 mt-7">
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                placeholder="Enter Vehicle Model"
                className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
              />

              <input
                type="text"
                id="Numberplate"
                name="Numberplate"
                placeholder="Enter Number Plate"
                className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
              />

              <input
                type="text"
                id="Colour"
                name="Colour"
                placeholder="Enter Colour"
                className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <button className="bg-[#ADFF45] text-black px-8 py-4 rounded-3xl text-base mr-36 font-bold shadow-lg border hover:bg-[#a2f143] transition-colors duration-300 focus:outline-none">
          CREATE POOL
        </button>
      </div>
    </>
  );
};

export default Lanpublish;
