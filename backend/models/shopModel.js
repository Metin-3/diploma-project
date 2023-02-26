const mongoose = require('mongoose');

const { Schema } = mongoose;
const shopSchema = new Schema(
    {
        shopImage: {
            type: String,
            required: true
        },
        shopName: {
            type: String,
            required: true
        },
        shopPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Shop = mongoose.model("shop", shopSchema);
module.exports = (Shop);