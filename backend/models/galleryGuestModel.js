const mongoose = require('mongoose');

const { Schema } = mongoose;
const guestSchema = new Schema(
    {
        guestImage: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Guest = mongoose.model("guest", guestSchema);
module.exports = (Guest);