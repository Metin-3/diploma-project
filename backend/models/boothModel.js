const mongoose = require('mongoose');

const { Schema } = mongoose;
const boothSchema = new Schema(
    {
        boothImage: {
            type: String,
            required: true
        },
        boothName: {
            type: String,
            required: true
        },
        boothPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Booth = mongoose.model("booth", boothSchema);
module.exports = (Booth);