const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true,
        unique: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date
    },
    content: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Post", postSchema)