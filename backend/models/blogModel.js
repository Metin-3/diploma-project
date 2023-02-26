const mongoose = require('mongoose');

const { Schema } = mongoose;
const blogSchema = new Schema(
    {
        blogImage: {
            type: String,
            required: true
        },
        blogName: {
            type: String,
            required: true
        },
        blogContent: {
            type: String,
            required: true
        },
        blogMonth: {
            type: String,
            required: true
        },
        blogDay: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Blog = mongoose.model("blog", blogSchema);
module.exports = (Blog);