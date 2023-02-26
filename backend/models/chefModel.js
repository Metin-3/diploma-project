const mongoose = require('mongoose');

const { Schema } = mongoose;
const chefSchema = new Schema(
    {
        chefImage: {
            type: String,
            required: true
        },
        chefName: {
            type: String,
            required: true
        },
        chefContent: {
            type: String,
            required: true
        },
        chefPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Chef = mongoose.model("chef", chefSchema);
module.exports = (Chef);