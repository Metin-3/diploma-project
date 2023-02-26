const mongoose = require('mongoose');

const { Schema } = mongoose;
const bakerySchema = new Schema(
    {
        bakeryImage: {
            type: String,
            required: true
        },
        bakeryName: {
            type: String,
            required: true
        },
        bakeryPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Bakery = mongoose.model("bakery", bakerySchema);
module.exports = (Bakery);