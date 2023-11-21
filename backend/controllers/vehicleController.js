const Vehicle = require('../models/vehicleModel');
const asyncHandler = require('express-async-handler');

// Create a new vehicle
const createVehicle = asyncHandler(async (req, res) => {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
});

// Get all vehicles
const getAllVehicles = asyncHandler(async (req, res) => {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
});

// Get a single vehicle by ID
const getVehicleById = asyncHandler(async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.status(200).json(vehicle);
});

// Delete a vehicle by ID
const deleteVehicleById = asyncHandler(async (req, res) => {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.status(204).json();
});

module.exports = {
    createVehicle,
    getAllVehicles,
    getVehicleById,
    deleteVehicleById,
};
