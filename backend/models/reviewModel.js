const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, min: 0, max: 5, required: true },
    message: { type: String, required: true },
    reviewDate: { type: Date, default: Date.now, required: true }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
