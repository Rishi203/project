const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    seatsAvailable: { type: Number, required: true },
    price: { type: Number, required: true }
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
