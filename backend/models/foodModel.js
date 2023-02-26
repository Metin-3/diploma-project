const mongoose = require('mongoose');

const { Schema } = mongoose;
const foodSchema = new Schema(
    {
        image: {
            type: String,
            required: true
        },
        foodName: {
            type: String,
            required: true
        },
        foodContent: {
            type: String,
            required: true
        },
        foodPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Food = mongoose.model("food", foodSchema);
module.exports = (Food)