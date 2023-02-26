const mongoose = require('mongoose');

const { Schema } = mongoose;
const cocktailSchema = new Schema(
    {
        cocktailImage: {
            type: String,
            required: true
        },
        cocktailName: {
            type: String,
            required: true
        },
        cocktailContent: {
            type: String,
            required: true
        },
        cocktailPrice: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Cocktail = mongoose.model("cocktail", cocktailSchema);
module.exports = (Cocktail);