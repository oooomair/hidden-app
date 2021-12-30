const router = require("express").Router()

const storyRouter = require("./story")

router.use("/stories", storyRouter)
// localhost:8000/api/stories

module.exports = router