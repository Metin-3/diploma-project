const mongoose = require('mongoose');

const { Schema } = mongoose;
const churraSchema = new Schema(
    {
        churraImage: {
            type: String,
            required: true
        },
        churraName: {
            type: String,
            required: true
        },
        churraPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Churra = mongoose.model("churra", churraSchema);
module.exports = (Churra);