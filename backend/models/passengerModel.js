const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
    rideId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookingTime: { type: Date, default: Date.now, required: true },
});

const Passenger = mongoose.model('Passenger', passengerSchema);

module.exports = Passenger;
