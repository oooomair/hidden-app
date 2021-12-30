const {Schema, model} = require("mongoose")

const StoriesSchema = Schema({
    title: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    comments: [{
        type: String
    }],
    isComments: {
        type: Boolean,
        required: true
    }
})

module.exports = model("Story", StoriesSchema)