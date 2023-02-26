const mongoose = require('mongoose');

const { Schema } = mongoose;
const eventSchema = new Schema(
    {
        eventImage: {
            type: String,
            required: true
        },
        eventName: {
            type: String,
            required: true
        },
        eventContent: {
            type: String,
            required: true
        },
        eventRead: {
            type: String,
            required: true
        },
        eventDate: {
            type: String,
            required: true
        },
        eventTimeStart: {
            type: String,
            required: true
        },
        eventTimeEnd: {
            type: String,
            required: true
        },
        eventLocation: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Event = mongoose.model("event", eventSchema);
module.exports = (Event);