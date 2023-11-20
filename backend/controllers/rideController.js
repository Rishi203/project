const Ride = require('../models/rideModel');
const asyncHandler = require('express-async-handler');

// Create a new ride
const createRide = asyncHandler(async (req, res) => {
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
    const ride = await Ride.findById(req.params.id);
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

module.exports = {
    createRide,
    getAllRides,
    getRideById,
    deleteRideById,
};
