const mongoose = require('mongoose');

const { Schema } = mongoose;
const drinkSchema = new Schema(
    {
        drinkImage: {
            type: String,
            required: true
        },
        drinkName: {
            type: String,
            required: true
        },
        drinkContent: {
            type: String,
            required: true
        },
        drinkPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Drink = mongoose.model("drink", drinkSchema);
module.exports = (Drink);