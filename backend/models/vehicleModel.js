const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicleModel: { type: String, required: true },
    licensePlate: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    colour: { type: String, required: true }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
