const mongoose = require('mongoose');

const { Schema } = mongoose;
const resSchema = new Schema(
    {
        resImage: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Res = mongoose.model("res", resSchema);
module.exports = (Res);