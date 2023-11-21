import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { TiLocation } from 'react-icons/ti';
import { FaCar, FaUser, FaRupeeSign, FaChair, FaClock } from 'react-icons/fa';

function Details({ key, startLocation, endLocation, vehicleInfo, seatsAvailable, price, user }) {
  const [availableSeats, setAvailableSeats] = useState(seatsAvailable);
  console.log('key ==', key);
  useEffect(() => {
    // Update the local state when seatsAvailable prop changes
    setAvailableSeats(seatsAvailable);
  }, [seatsAvailable]);
  const handleBooking = async () => {
    if (availableSeats === 0) {
      // Show a popup or some message indicating no seats available
      alert('No seats available.');
      return;
    }

    try {
      // Update the seats on the server
      await Axios.put(`http://localhost:5000/api/rides/${key}/book`, { availableSeats: availableSeats - 1 });

      // Update the local state
      setAvailableSeats(prevSeats => prevSeats - 1);
      // You can also trigger other actions or show a success message here
    } catch (error) {
      console.error('Error booking ride:', error);
      // Handle error, show an error message, etc.
    }
  };
  return (
    <>
      <div className="bg-black p-8 rounded-3xl shadow-xl mb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-6">
          <p className="text-white flex flex-row items-center text-lg mb-5">
            <TiLocation size={20} color="white" className="mr-3" /> Start Location: {startLocation}
          </p>
          <p className="text-white flex flex-row items-center text-lg">
            <TiLocation size={20} color="white" className="mr-3" /> End Location: {endLocation}
          </p>
        </div>
        <div className="flex flex-col space-y-6">
          <p className="text-white flex flex-row items-center text-lg mb-5">
            <FaCar size={20} color="white" className="mr-3" /> Vehicle Info: {vehicleInfo}
          </p>
          <p className="text-white flex flex-row items-center text-lg">
            <FaChair size={20} color="white" className="mr-3" /> Seats Available: {seatsAvailable}
          </p>
        </div>
        <div className="flex flex-col space-y-6">
          <p className="text-white flex flex-row items-center text-lg mb-5">
            <FaRupeeSign size={20} color="white" className="mr-3" /> Price: {price}
          </p>
          {/* Uncomment the lines below if you have a 'time' property in your ride object */}
          {/* <p className="text-white flex flex-row items-center text-lg">
            <FaClock size={20} color="white" className="mr-3" /> Time: {time}
          </p> */}
        </div>

        <div className="flex flex-col space-y-6 md:col-span-1 items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <FaUser size={24} color="black" />
            </div>
            <p className="text-white ml-3  text-lg">{user}</p>
          </div>
          <button
          className="bg-[#ADFF45] px-8 rounded-xl text-lg hover:bg-[#aeff45ed] h-10"
          onClick={handleBooking}
          >
          Book ride
          </button>
        </div>
      </div>
    </>
  );
}

export default Details;
