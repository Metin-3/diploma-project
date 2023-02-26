const mongoose = require('mongoose');

const { Schema } = mongoose;
const dinnerSchema = new Schema(
    {
        dinnerImage: {
            type: String,
            required: true
        },
        dinnerName: {
            type: String,
            required: true
        },
        dinnerContent: {
            type: String,
            required: true
        },
        dinnerPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Dinner = mongoose.model("dinner", dinnerSchema);
module.exports = (Dinner);