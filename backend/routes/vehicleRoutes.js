const express = require('express');
const router = express.Router();
const {
    createVehicle,
    getAllVehicles,
    getVehicleById,
    deleteVehicleById,
} = require('../controllers/vehicleController');

router.use((req, res, next) => {
    console.log('Received a request at:', new Date().toLocaleString());
    console.log('Request method:', req.method);
    console.log('Request URL:', req.originalUrl);
    next();
  });

// Route to create a new vehicle
router.post('/vehicles', createVehicle);

// Route to get all vehicles
router.get('/vehicles', getAllVehicles);

// Route to get a single vehicle by ID
router.get('/vehicles/:id', getVehicleById);

// Route to delete a vehicle by ID
router.delete('/vehicles/:id', deleteVehicleById);

module.exports = router;
