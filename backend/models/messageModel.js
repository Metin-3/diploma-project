const mongoose = require('mongoose');

const { Schema } = mongoose;
const messageSchema = new Schema(
    {
        messageName: {
            type: String,
            required: true
        },
        messageEmail: {
            type: String,
            required: true
        },
        messageSubject: {
            type: String,
            required: true
        },
        messageContent: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Message = mongoose.model("message", messageSchema);
module.exports = (Message);