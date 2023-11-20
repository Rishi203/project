const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');

// Create a new ride
router.post('/rides', rideController.createRide);

// Get all rides
router.get('/rides', rideController.getAllRides);

// Get a single ride by ID
router.get('/rides/:id', rideController.getRideById);

// Delete a ride by ID
router.delete('/rides/:id', rideController.deleteRideById);

module.exports = router;
