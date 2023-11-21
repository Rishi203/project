import React, { useState, useEffect } from 'react';
import { TiLocation, TiCalendar, TiTime } from 'react-icons/ti';
import Details from '../components/Details';

const Lansearch = () => {
  const [rides, setRides] = useState([]);
  const [userDetails, setUserDetails] = useState({});

  const getUserDetails = async (userId) => {
    try {
      console.log('userid==', userId);
      const response = await fetch(`http://localhost:5000/api/users/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userData = await response.json();
      console.log('User data:', userData);

      // Update the user details dictionary
      setUserDetails((prevUserDetails) => ({
        ...prevUserDetails,
        [userId]: userData.userName,
      }));

      return userData.userName;
    } catch (error) {
      console.error('Error fetching user name:', error);
      return 'Unknown'; // Default to 'Unknown' if an error occurs
    }
  };

  const getVehicleDetails = async (vehicleId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/vehicles/${vehicleId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const vehicleData = await response.json();
      console.log('Vehicle data:', vehicleData);

      return vehicleData.vehicleModel; // Assuming the vehicleModel is the property you want
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
      return 'Unknown'; // Default to 'Unknown' if an error occurs
    }
  };

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/rides');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data ...", data);

        // Extract unique user IDs and vehicle IDs from the rides
        const uniqueUserIds = Array.from(new Set(data.map((ride) => ride.userId)));
        const uniqueVehicleIds = Array.from(new Set(data.map((ride) => ride.vehicleId)));

        // Create an array of promises for fetching user details and vehicle details
        const userDetailsPromises = uniqueUserIds.map(async (userId) => {
          const userName = await getUserDetails(userId);
          return { userId, userName };
        });

        const vehicleDetailsPromises = uniqueVehicleIds.map(async (vehicleId) => {
          const vehicleModel = await getVehicleDetails(vehicleId);
          return { vehicleId, vehicleModel };
        });

        // Wait for all user details and vehicle details promises to resolve
        const userDetailsResults = await Promise.all(userDetailsPromises);
        const vehicleDetailsResults = await Promise.all(vehicleDetailsPromises);

        // Update the rides with user names and vehicle models
        const ridesWithDetails = data.map((ride) => {
          const userDetails = userDetailsResults.find((user) => user.userId === ride.userId);
          const vehicleDetails = vehicleDetailsResults.find((vehicle) => vehicle.vehicleId === ride.vehicleId);

          const userName = userDetails ? userDetails.userName : 'Unknown';
          const vehicleModel = vehicleDetails ? vehicleDetails.vehicleModel : 'Unknown';

          console.log("user name is ...", userName); // Log the user name here
          console.log("vehicle model is ...", vehicleModel); // Log the vehicle model here

          return { ...ride, userName, vehicleModel };
        });

        setRides(ridesWithDetails);

      } catch (error) {
        console.error('Error fetching rides:', error);
      }
    };

    fetchRides();
  }, []);

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

      {rides.map((ride) => (
        <Details
          key={ride._id}
          startLocation={ride.startLocation}
          endLocation={ride.endLocation}
          vehicleInfo={ride.vehicleModel}
          seatsAvailable={ride.seatsAvailable}
          price={ride.price}
          user={ride.userName} // Using the userName fetched during the initial fetch
         // Using the vehicleModel fetched during the initial fetch
        />
      ))}
    </>
  );
};

export default Lansearch;
