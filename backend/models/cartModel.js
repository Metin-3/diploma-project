const mongoose = require('mongoose');

const { Schema } = mongoose;
const cartSchema = new Schema(
    {
        cartImage: {
            type: String,
            required: true
        },
        cartName: {
            type: String,
            required: true
        },
        cartPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Cart = mongoose.model("cart", cartSchema);
module.exports = (Cart);