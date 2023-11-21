import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext"; // Replace with the correct path

const Lanpublish = () => {
  const { userId } = useAuth();
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    //startDate: "",
    //startTime: "",
    seatsAvailable: 0,
    price: 0,
    vehicleModel: "",
    licensePlate: "",
    colour: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log('Form Data:', formData);
      // Create a new vehicle first
      const vehicleResponse = await axios.post("http://localhost:5000/api/vehicles", {
        vehicleModel: formData.vehicleModel,
        licensePlate: formData.licensePlate,
        colour: formData.colour,
        userId: userId,
      });

      console.log("Vehicle Res",vehicleResponse)
      if (!vehicleResponse.data._id) {
        console.error("Failed to create vehicle");
        console.log("Detailed error response:", vehicleResponse.data.error);
        // Handle error
        return;
      }


      // Extract the created vehicle's ID from the response
      const { _id: vehicleId } = vehicleResponse.data;
      console.log("vehicle id...", vehicleResponse.data._id);

      // Now, create the ride with the vehicleId
      const rideResponse = await axios.post("http://localhost:5000/api/rides", {
        startLocation: formData.from,
        endLocation: formData.to,
        //startDate: formData.startDate,
        //startTime: formData.startTime,
        seatsAvailable: formData.seatsAvailable,
        price: formData.price,
        vehicleId: vehicleId, // Use the vehicleId obtained above
        userId: userId,
      });
      console.log("ride respone...", rideResponse);
      if (rideResponse.data._id) {
        console.log("Ride and vehicle created successfully!");
        // You may want to redirect or handle success in some way
      } else {
        console.error("Failed to create ride");
        // Handle error
      }
    } catch (error) {
      console.error("Error creating ride and vehicle:", error);
      console.log("Detailed error response:", error.response);
    }
  };

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
              value={formData.from}
              onChange={handleChange} // Use handleChange for onChange event
            />

            <input
              type="text"
              id="to"
              name="to"
              placeholder="Enter To"
              className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
              value={formData.to}
              onChange={handleChange} // Use handleChange for onChange event
            />

            <input
              type="text"
              id="startDate"
              placeholder="Start Date"
              name="startDate"
              className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
              value={formData.startDate}
              onChange={handleChange} // Use handleChange for onChange event
            />

            <input
              type="text"
              id="startTime"
              name="startTime"
              placeholder="Start Time"
              className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
              value={formData.startTime}
              onChange={handleChange} // Use handleChange for onChange event
            />

            <input
              type="number"
              id="seatsAvailable"
              name="seatsAvailable"
              placeholder="Enter Seats Available"
              className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
              value={formData.seatsAvailable}
              onChange={handleChange} // Use handleChange for onChange event
            />

            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter Price"
              className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
              value={formData.price}
              onChange={handleChange} // Use handleChange for onChange event
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
                value={formData.vehicleModel}
                onChange={handleChange} // Use handleChange for onChange event
              />

              <input
                type="text"
                id="licensePlate"
                name="licensePlate"
                placeholder="Enter Number Plate"
                className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
                value={formData.licensePlate}
                onChange={handleChange} // Use handleChange for onChange event
              />

              <input
                type="text"
                id="Colour"
                name="colour"
                placeholder="Enter Colour"
                className="block w-96 p-3 mb-4 border rounded-xl focus:outline-none focus:border-blue-500 shadow-lg"
                value={formData.colour}
                onChange={handleChange} // Use handleChange for onChange event
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <button
          onClick={handleSubmit}
          className="bg-[#ADFF45] text-black px-8 py-4 rounded-3xl text-base mr-36 font-bold shadow-lg border hover:bg-[#a2f143] transition-colors duration-300 focus:outline-none"
        >
          CREATE POOL
        </button>
      </div>
    </>
  );
};

export default Lanpublish;
