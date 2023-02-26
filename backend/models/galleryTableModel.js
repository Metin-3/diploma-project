const mongoose = require('mongoose');

const { Schema } = mongoose;
const tableSchema = new Schema(
    {
        tableImage: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Table = mongoose.model("table", tableSchema);
module.exports = (Table);