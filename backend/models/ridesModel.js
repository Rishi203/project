const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
  {
    startLocation: {
      type: String,
      required: true,
    },
    endLocation: {
      type: String,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    availableSeats: {
      type: Number,
      required: true,
    },
    fare: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;