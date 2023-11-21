const Ride = require('../models/rideModel');
const asyncHandler = require('express-async-handler');

// Create a new ride
const createRide = asyncHandler(async (req, res) => {
    console.log('Received a request to create a vehicle');
    const ride = await Ride.create(req.body);
    res.status(201).json(ride);
});

// Get all rides
const getAllRides = asyncHandler(async (req, res) => {
    const rides = await Ride.find();
    res.status(200).json(rides);
});

// Get a single ride by ID
const getRideById = asyncHandler(async (req, res) => {
    const ride = await Ride.findById(req.params.id).populate('userId');
    if (!ride) {
        return res.status(404).json({ message: 'Ride not found' });
    }
    res.status(200).json(ride);
});


// Delete a ride by ID
const deleteRideById = asyncHandler(async (req, res) => {
    const ride = await Ride.findByIdAndDelete(req.params.id);
    if (!ride) {
        return res.status(404).json({ message: 'Ride not found' });
    }
    res.status(204).json();
});

const bookRide = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { availableSeats } = req.body;

    console.log('Received a request to book a ride');
    console.log('Ride ID:', id);
    console.log('Request body:', req.body);

    // Validate if there are available seats
    if (availableSeats < 0) {
      console.log('Invalid number of seats:', availableSeats);
      return res.status(400).json({ message: 'Invalid number of seats' });
    }

    try {
      // Try to find and update the ride
      const ride = await Ride.findByIdAndUpdate(id, { seatsAvailable: availableSeats }, { new: true });

      if (!ride) {
        console.log('Ride not found:', id);
        return res.status(404).json({ message: 'Ride not found' });
      }

      console.log('Booking successful. Updated ride:', ride);
      res.status(200).json(ride);
    } catch (error) {
      console.error('Error booking ride:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});
  

module.exports = {
    createRide,
    getAllRides,
    getRideById,
    deleteRideById,
    bookRide,
};
