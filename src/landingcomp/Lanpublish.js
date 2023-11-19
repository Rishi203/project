import React from "react";

const Lanpublish = () => {
  return (
    <>
      <div className="text-3xl font-bold text-blue-600 bg-white p-4 rounded-lg shadow-md mb-6">
        Ride Information
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label htmlFor="from" className="block text-lg mb-2">
            From:
          </label>
          <input
            type="text"
            id="from"
            name="from"
            placeholder="Enter From"
            className="block w-full p-3 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="startDate" className="block text-lg mb-2">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            className="block w-full p-3 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="vehicleModel" className="block text-lg mb-2">
            Vehicle Model:
          </label>
          <input
            type="text"
            id="vehicleModel"
            name="vehicleModel"
            placeholder="Enter Vehicle Model"
            className="block w-full p-3 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="price" className="block text-lg mb-2">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter Price"
            className="block w-full p-3 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="to" className="block text-lg mb-2">
            To:
          </label>
          <input
            type="text"
            id="to"
            name="to"
            placeholder="Enter To"
            className="block w-full p-3 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="startTime" className="block text-lg mb-2">
            Start Time:
          </label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            className="block w-full p-3 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="seatsAvailable" className="block text-lg mb-2">
            Seats Available:
          </label>
          <input
            type="number"
            id="seatsAvailable"
            name="seatsAvailable"
            placeholder="Enter Seats Available"
            className="block w-full p-3 mb-4 border rounded focus:outline-none focus:border-blue-500"
          />

          <div className="mt-12 ml-20">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none">
              Create Pool
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lanpublish;