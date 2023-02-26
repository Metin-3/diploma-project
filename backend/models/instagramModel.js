const mongoose = require('mongoose');

const { Schema } = mongoose;
const instagramSchema = new Schema(
    {
        instagramImage: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Instagram = mongoose.model("instagram", instagramSchema);
module.exports = (Instagram);