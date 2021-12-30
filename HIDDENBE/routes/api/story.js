const router = require("express").Router()

const asyncHandler = require("express-async-handler")
const Story = require("../../models/stories")

router.get("/", asyncHandler(async (req, res) => {
    const stories = await Story.find({})
    console.log(stories);
    res.json(stories)
}))

router.post("/", asyncHandler(async (req, res) => {
    const { title, story, isComments, comments }  = req.body
    const newStory = new Story({
        title: title,
        story: story,
        comments: comments,
        isComments: isComments
    })
    await newStory.save()
    res.json(newStory)
}))

module.exports = router