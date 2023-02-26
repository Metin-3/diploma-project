const mongoose = require('mongoose');

const { Schema } = mongoose;
const breakfastSchema = new Schema(
    {
        breakfastImage: {
            type: String,
            required: true
        },
        breakfastName: {
            type: String,
            required: true
        },
        breakfastContent: {
            type: String,
            required: true
        },
        breakfastPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Breakfast = mongoose.model("breakfast", breakfastSchema);
module.exports = (Breakfast);