const mongoose = require('mongoose');

const { Schema } = mongoose;
const restaurantSchema = new Schema(
    {
        restaurantImage: {
            type: String,
            required: true
        },
        restaurantName: {
            type: String,
            required: true
        },
        restaurantPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Restaurant = mongoose.model("restaurant", restaurantSchema);
module.exports = (Restaurant);